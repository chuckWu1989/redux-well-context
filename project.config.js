/* eslint import/no-extraneous-dependencies: off */
const { argv } = require('optimist');
const pkg = require('./package.json');

module.exports = {
  /** The environment to use when building the project */
  env: process.env.NODE_ENV || 'development',
  /** The full path to the project's root directory */
  basePath: __dirname,
  /** The name of the directory containing the application source code */
  inDir: argv.indir || 'src',
  /** The name of the directory in which to emit compiled assets */
  outDir: argv.outdir || 'dist',
  /** The name of the testing entry directory */
  testDir: argv.testdir || 'tests',
  /** The name of the testing output report directory  */
  reportDir: argv.reportdir || 'reports',
  /** The name of the library directory */
  libDir: argv.libdir || 'lib',
  /** The file name of the application's entry point */
  main: argv.main || 'index',
  /** The main file for publish */
  publicMain: argv.publicmain || './index.js',
  /** Library name */
  libName: argv.libname || pkg.name,
  /** Whether to output the lint report */
  outputLint: argv.outputlint || false,
  /** Whether to fix the lint error automatically */
  fixLint: argv.fixlint || false,
  /** Whether to enable verbose logging */
  verbose: argv.verbose || false,
  /** The setting of the coverage threshold */
  coverageThreshold: argv.threshold || {
    statements: 50,
    branches: 50,
    functions: 50,
    lines: 50,
  },
  /** Files to be copied into publish folder */
  copyFiles: [
    'README.md',
    'CHANGELOG.md',
    'LICENSE',
  ],
  /** Folders to be copied into publish folder */
  copyFolders: [],
  /** webpack configuration file */
  webpack: argv.config || 'webpack.config.js',
};
