const path = require('./libs/path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const project = require('../project.config');

const DEV = project.env === 'development';
const TEST = project.env === 'test';
const PROD = project.env === 'production';

const config = {
  entry: {
    polyfill: [
      project.polyfill,
    ],
    main: [
      path.inProjectEntry(project.main),
    ],
  },
  output: {
    path: path.inProject(project.outDir),
    filename: DEV ? '[name].js' : '[name].[chunkhash].js',
    publicPath: project.publicPath,
  },
  devtool: project.sourcemaps ? 'source-map' : false,
  performance: { hints: false },
  module: {
    rules: [],
  },
  resolve: {
    modules: [
      path.inProject(project.inDir),
      'node_modules',
    ],
    extensions: ['*', '.js', '.jsx', '.json'],
  },
  externals: project.externals,
  plugins: [
    new webpack.DefinePlugin(Object.assign({
      'process.env': { NODE_ENV: JSON.stringify(project.env) },
      DEV,
      TEST,
      PROD,
    }, project.globals)),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
  ],
};

// ------------------------------------
// JavaScript
// ------------------------------------
config.module.rules.push({
  test: /\.(js|jsx)$/,
  exclude: /node_modules/,
  use: ['babel-loader'],
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
  disable: DEV,
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

// ------------------------------------
// HTML
// ------------------------------------
if (!project.disableHtml) {
  config.plugins.push(new HtmlWebpackPlugin({
    template: path.inProjectEntry(project.htmlTemplate),
    inject: true,
    minify: {
      collapseWhitespace: true,
    },
  }));
}

// ------------------------------------
// Development Tools
// ------------------------------------
if (DEV) {
  config.entry.main.unshift(
    'react-hot-loader/patch',
    `webpack-hot-middleware/client.js?path=${config.output.publicPath}__webpack_hmr`,
    'webpack/hot/only-dev-server'
  );
  config.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  );
}

// ------------------------------------
// Bundle Splitting
// ------------------------------------
if (!TEST) {
  const bundles = ['polyfill', 'manifest'];
  if (project.vendors && project.vendors.length) {
    bundles.unshift('vendor');
    config.entry.vendor = project.vendors;
  }
  config.plugins.push(new webpack.optimize.CommonsChunkPlugin({
    names: bundles,
  }));
}

// ------------------------------------
// Production Optimizations
// ------------------------------------
if (PROD) {
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
}

module.exports = config;
