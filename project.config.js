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
  /** The file name of the application's entry point */
  main: argv.main || 'index',
  /** The name of the directory in which to emit compiled assets */
  outDir: argv.outdir || 'dist',
  /** The name of the testing entry directory */
  testDir: argv.testdir || 'tests',
  /** The name of the testing output report directory  */
  reportDir: argv.reportdir || 'reports',
  /** The template of html. It will be used if the configuration of html is true */
  htmlTemplate: argv.template || 'index.html',
  /** Global less file */
  globalLess: argv.globalless || 'utils/style.less',
  /** Library name */
  libName: argv.libname || pkg.name,
  /** The name of the library directory */
  libDir: argv.libdir || 'lib',
  /** The port of the server */
  port: argv.port || 3000,
  /** The base path for all projects assets (relative to the website root) */
  publicPath: argv.publicpath || '',
  /** The main file for publish */
  publicMain: argv.publicmain || './index.js',
  /** Whether to generate sourcemaps */
  sourcemaps: argv.sourcemaps || false,
  /** A hash map of keys that the compiler should treat as external to the project */
  externals: argv.externals || {},
  /** A hash map of variables and their values to expose globally */
  globals: argv.globals || {},
  /** Whether to output the lint report */
  outputLint: argv.outputlint || false,
  /** Whether to fix the lint error automatically */
  fixLint: argv.fixlint || false,
  /** Whether to enable verbose logging */
  verbose: argv.verbose || false,
  /** Whether to use less loader */
  disableLess: argv.dsiableless || false,
  /** Whether to use css loader */
  disableCss: argv.dsiablecss || false,
  /** Whether to use text loader */
  disableText: argv.dsiabletext || false,
  /** Whether to use image loader */
  disableImage: argv.dsiableimage || false,
  /** Whether to use font loader */
  disableFont: argv.dsiablefont || false,
  /** Whether to use html loader */
  disableHtml: argv.dsiablehtml || false,
  /** Assign the location of polyfill. By default, the babel-polyfill will be used. */
  polyfill: argv.polyfill || 'babel-polyfill',
  /** The limit of image size */
  imageSize: argv.imagesize || 8192,
  /** The limit of font size */
  fontSize: argv.fontsize || 10000,
  /** The setting of the coverage threshold */
  coverageThreshold: argv.threshold || {
    statements: 50,
    branches: 50,
    functions: 50,
    lines: 50,
  },
  /** The list of modules to bundle separately from the core application code */
  vendors: [
    'react',
    'react-dom',
    'prop-types',
  ],
  /** Files to be copied into publish folder */
  copyFiles: [
    'README.md',
    'CHANGELOG.md',
    'LICENSE',
  ],
  /** Folders to be copied into publish folder */
  copyFolders: [
    'assets',
  ],
  /** webpack configuration file */
  webpack: argv.config || 'webpack.config.js',
};
