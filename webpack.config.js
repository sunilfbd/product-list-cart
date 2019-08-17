var webpack = require("webpack");
var path = require("path");
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");

var config = {
	entry: [SRC_DIR+"/app/index.js", SRC_DIR+"/sass/main.scss"],
	output: {
		path: DIST_DIR+"/app",
		filename: "bundle.js",
		publicPath: "/app/"
	},
	resolve: {
		extensions: ['.js', '.jsx']
	},
	module: {
		rules: [{
			test: /\.js?/,
			include: SRC_DIR,
			loader: "babel-loader", 
			query: {
				presets: ["react","es2015","stage-2"],
				plugins: ["transform-es2015-modules-amd"]
			}
		},
		{
			test: /\.scss$/,
			use: ExtractTextPlugin.extract({
				fallback: 'style-loader',
				use: ['css-loader', 'sass-loader']
			})
		}]
	},
	devServer: {
		historyApiFallback: true
	},
	plugins: [
		new ExtractTextPlugin('main.css'),
	],
	devtool: 'cheap-module-eval-source-map'
};

module.exports = config;