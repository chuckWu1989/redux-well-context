const fse = require('fs-extra');
const path = require('path');
const glob = require('glob');
const babel = require('babel-core');
const mkdirp = require('mkdirp');
const replace = require('replace');
const project = require('../../project.config');

const transFormCjsFiles = (from, to, target, ignore) => {
  const files = glob.sync(target, { cwd: from, ignore });
  files.forEach((file) => {
    const sourceFile = path.resolve(from, file);
    const targetFile = path.resolve(to, file);
    const targetDir = path.dirname(targetFile);
    mkdirp.sync(targetDir);
    if (file.indexOf('.js') >= 0) {
      const result = babel.transformFileSync(sourceFile, { env: project.env, comments: false });
      fse.writeFileSync(targetFile, result.code);
    }
  });
};

const from = path.resolve(__dirname, `../../${project.inDir}`);
const to = path.resolve(__dirname, `../../${project.libDir}`);
const target = '**/?(*.less|*.js)';
const styleFile = 'less';
const styleTarget = 'css';
const ignore = [];

transFormCjsFiles(from, to, target, ignore);
replace({
  regex: styleFile,
  replacement: styleTarget,
  paths: [to],
  recursive: true,
  silent: true,
});
