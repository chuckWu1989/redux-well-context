const path = require('./libs/path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
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
      ['env', { modules: false }],
      'react'
    ],
    plugins: [
      'syntax-dynamic-import',
      ['transform-object-rest-spread', { useBuiltIns: true }],
      ['transform-class-properties', { spec: true }]
    ]
  },
});

// ------------------------------------
// Text
// ------------------------------------
if (!project.disableText) {
  config.module.rules.push({
    test: /\.(js|jsx|txt)$/,
    loader: 'raw-loader',
    resourceQuery: '?stringFormat',
  });
}

// ------------------------------------
// Styles
// ------------------------------------
const extractStyles = new ExtractTextPlugin({
  filename: 'styles/[name].[contenthash].css',
  allChunks: true,
  disable: false,
});
const cssLoader = {
  loader: 'css-loader',
  options: {
    sourceMap: false,
    minimize: {
      discardComments: {
        removeAll: true,
      },
      discardUnused: false,
      mergeIdents: false,
      reduceIdents: false,
      safe: true,
      sourcemap: project.sourcemaps,
    },
  },
};
const postcssLoader = {
  loader: 'postcss-loader',
  options: {
    sourceMap: project.sourcemaps,
    config: {
      path: path.inProject('build/configs/postcss.config.js'),
    },
  },
};
if (!project.disableLess) {
  config.module.rules.push({
    test: /\.less$/,
    loader: extractStyles.extract({
      fallback: 'style-loader',
      use: [
        cssLoader,
        postcssLoader,
        {
          loader: 'less-loader',
          options: {
            sourceMap: project.sourcemaps,
            includePaths: [
              path.inProject(project.inDir),
            ],
          },
        },
      ],
    }),
  });
}
if (!project.disableCss) {
  config.module.rules.push({
    test: /\.css$/,
    loader: extractStyles.extract({
      fallback: 'style-loader',
      use: [
        cssLoader,
        postcssLoader,
      ],
    }),
  });
}
config.plugins.push(extractStyles);

// ------------------------------------
// Image
// ------------------------------------
if (!project.disableImage) {
  config.module.rules.push({
    test: /\.(png|jpg|gif)$/,
    loader: 'url-loader',
    options: {
      limit: project.imageSize,
    },
  });
}

// ------------------------------------
// Fonts
// ------------------------------------
if (!project.disableFont) {
  const FONT_TYPES = new Map([
    ['woff', 'application/font-woff'],
    ['woff2', 'application/font-woff2'],
    ['otf', 'font/opentype'],
    ['ttf', 'application/octet-stream'],
    ['eot', 'application/vnd.ms-fontobject'],
    ['svg', 'image/svg+xml'],
  ]);
  for (const [extension, mimetype] of FONT_TYPES) {
    config.module.rules.push({
      test: new RegExp(`\\.${extension}$`),
      loader: 'url-loader',
      options: {
        name: 'fonts/[name].[ext]',
        limit: project.fontSize,
        mimetype,
      },
    });
  }
}

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

