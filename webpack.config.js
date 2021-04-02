const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry:[
	'./src/app.js'
	],
	output:{
		path: path.join(__dirname),
		filename:'build.js',
	},
	module:{
		rules: [
		{
			test: /\.js$/,
			exclude: /node_modules/,
			use: ['babel-loader'],
		},
		{
			test: /\.css$/,
			loader:['style-loader','css-loader']
		},
		{
			test: /\.html$/,
			loader: "html-loader"
		}
		]
	},

	plugins:[
	new HtmlWebpackPlugin({
		template: "./src/index.html",
		filename: "./index.html"
	})
	]
}