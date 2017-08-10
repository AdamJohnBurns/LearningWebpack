# Learning Webpack

Code based on the Webpack 3.4.1 getting started guide: https://webpack.js.org/guides/getting-started

## Node modules

* clean-webpack-plugin: Cleans the /dist folder before each build, otherwise outdated files can build up and clutter things
* css-loader: Used by webpack to load CSS files
* csv-loader: Used by webpack to load CSV/TSV files
* file-loader: Used by webpack to emit the required object as a file, and return its public URL so it can be accessed.
* html-webpack-plugin: Generates an index.html file with the correct bundles added, so we don't have to manually do it. Makes sure bundles are always accessible even if things are refactored.
* style-loader: Used by webpack to write styles to the page via a <style> tag
* webpack: Bundler used to combine all assets into a single dependency graph
* webpack-dev-server: A simple web server with live reloading
* xml-loader: Used by webpack to load XML files
