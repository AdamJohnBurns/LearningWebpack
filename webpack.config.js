const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  // entry point of bundler, where webpack starts building its dependency graph
  // entry: './src/index.js',

  // we can have a single entry, or several
  entry: {
    // assetManagement: './src/assetManagement.js',

    // print: './src/print.js', // not needed as will be included in outputManagement
    outputManagement: './src/outputManagement.js'
  },

  // output where bundled modules are placed
  output: {
    // we can output it all to a single bundle
    // filename: 'bundle.js',

    // or create multiple bundles based on differently named entrys above
    filename: '[name].bundle.js',

    path: path.resolve(__dirname, 'dist')
  },

  // modules used to load specific files, 'test' checks for a filename, 'use' is which loader to use for a match
  module: {
    rules: [
      // CSS files
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },

      // image files
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },

      // font files
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      },

      // CSV/TSV files
      {
        test: /\.(csv|tsv)$/,
        use: [
          'csv-loader'
        ]
      },

      // XML files
      {
        test: /\.xml$/,
        use: [
          'xml-loader'
        ]
      }
    ]
  },

  // array of all enabled plugins
  plugins: [
    // cleans specified folders before each build
    new CleanWebpackPlugin(['dist']),

    // generates an index.html file with the above generated output
    new HtmlWebpackPlugin({
      title: 'Output Management'
    }),

    // enable webpacks built in HMR, must also be enabled for the dev server below
    new webpack.HotModuleReplacementPlugin()
  ],

  // development tools - note shouldnt be used for production builds
  devtool: 'inline-source-map',

  // development server from webpack-dev-server with live reloading
  devServer: {
    // folder to serve, by default to localhost on an available port
    contentBase: './dist',

    // enable webpacks built in HMR (Hot Module Replacement), plugin must also be enabled above
    hot: true
  }

};
