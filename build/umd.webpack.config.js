const path = require('./libs/path');
const webpack = require('webpack');
const project = require('../project.config');

const config = {
  entry: {
    [project.libName]: path.inProjectEntry(project.main),
  },
  output: {
    path: path.inProject(`${project.libDir}/minify`),
    filename: `${project.libName}.min.js`,
    library: project.libName,
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  module: {
    rules: [],
  },
  plugins: [],
};

// ------------------------------------
// JavaScript
// ------------------------------------
config.module.rules.push({
  test: /\.(js|jsx)$/,
  exclude: /node_modules/,
  loader: 'babel-loader',
  options: {
    babelrc: false,
    presets: [
      ['env', { modules: false }]
    ],
    plugins: [
      'syntax-dynamic-import',
      ['transform-object-rest-spread', { useBuiltIns: true }],
      ['transform-class-properties', { spec: true }]
    ]
  },
});

config.plugins.push(
  new webpack.LoaderOptionsPlugin({
    minimize: true,
    debug: false,
  }),
  new webpack.optimize.UglifyJsPlugin({
    sourceMap: false,
    comments: false,
    compress: {
      warnings: false,
      screw_ie8: true,
      conditionals: true,
      unused: true,
      comparisons: true,
      sequences: true,
      dead_code: true,
      evaluate: true,
      if_return: true,
      join_vars: true,
    },
  })
);

module.exports = config;

