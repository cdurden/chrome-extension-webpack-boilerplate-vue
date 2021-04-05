var webpack = require("webpack"),
    path = require("path"),
    fileSystem = require("fs"),
    env = require("./utils/env"),
    ExtensionReloader  = require('webpack-extension-reloader'),
    CleanWebpackPlugin = require("clean-webpack-plugin"),
    CopyWebpackPlugin = require("copy-webpack-plugin"),
    HtmlWebpackPlugin = require("html-webpack-plugin"),
    WriteFilePlugin = require("write-file-webpack-plugin");

// load the secrets
var alias = {
  'vue$': 'vue/dist/vue.esm.js'
};

var secretsPath = path.join(__dirname, ("secrets." + env.NODE_ENV + ".js"));

if (fileSystem.existsSync(secretsPath)) {
  alias["secrets"] = secretsPath;
}

var options = {
  watch: true,
  entry: {
    popup: path.join(__dirname, "src", "js", "popup.js"),
    options: path.join(__dirname, "src", "js", "options.js"),
    background: path.join(__dirname, "src", "js", "old", "background.js"),
    'content-script': [
//        'jquery.js',
        'settings.js',
        'setup.js',
        'inject.js',
        'jquery-ui.aleksi.min.js',
        'aleksi_plugin_methods.js',
        'aleksi.js',
        'content_listener.js'
    ].map( filename => { return path.join(__dirname, "src", "js", "old", filename ); } ),
  },
    /*
  chromeExtensionBoilerplate: {
    notHotReload: ["background", "content-script"]
  },
  */
  output: {
    path: path.join(__dirname, "build"),
    filename: "[name].bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: "style-loader!css-loader",
        exclude: /node_modules/
      },
      {
        test: /\.(jpg|jpeg|png|gif|svg)$/,
        loader: "file-loader",
        options: {
          name: '[path][name].[ext]'
        },
        exclude: /node_modules/
      },
      {
        test: /\.(eot|otf|ttf|woff|woff2)$/,
        loader: "file-loader",
        options: {
          name: '[path][name].[ext]'
        },
        exclude: /node_modules/
      },
      {
        test: /\.html$/,
        loader: "html-loader",
        exclude: /node_modules/
      },
    /*  {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      */
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  resolve: {
    alias: alias
  },
  plugins: [
    // clean the build folder
    new CleanWebpackPlugin(["build"]),
    new ExtensionReloader({
      entries: { // The entries used for the content/background scripts or extension pages
        contentScript: 'content-script',
        background: 'background',
        extensionPage: 'popup',
      }
    }),
    new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
    }),
    // expose and write the allowed env vars on the compiled bundle
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(env.NODE_ENV)
    }),
    new CopyWebpackPlugin([{
      from: "src/manifest.json",
      transform: function (content, path) {
        // generates the manifest file using the package.json informations
        return Buffer.from(JSON.stringify({
          description: process.env.npm_package_description,
          version: process.env.npm_package_version,
          ...JSON.parse(content.toString())
        }))
      }
    },
    { 
      from: 'src/img'
    }]),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "popup.html"),
      filename: "popup.html",
      chunks: ["popup"]
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "options.html"),
      filename: "options.html",
      chunks: ["options"]
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "background.html"),
      filename: "background.html",
      chunks: ["background"]
    }),
    new WriteFilePlugin()
  ]
};

if (env.NODE_ENV === "development") {
  //options.devtool = "cheap-module-eval-source-map";
  options.devtool = "source-map";
}

module.exports = options;
