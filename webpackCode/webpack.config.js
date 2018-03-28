const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	entry:{
		app:'./src/js/index.js',
		print02: './src/js/print.js'
	},
	devtool:'inline-soure-map',
	derServer:{
		contentBase:'./dist'
	},
	plugins:[
		new CleanWebpackPlugin(['dist']),
		new HtmlWebpackPlugin({
			title:'output',
			filename:'index.html',
			template:'src/index.html',
			inject:'body'
		})
	],
	output: {
		filename:'[name].bundle.js',
		path:path.resolve(__dirname,'dist')
	},
	module:{
		rules:[
			{
				test:/\.css$/,
				use:[
					'style-loader',
					'css-loader'
				]
			},{
				test:/\.scss$/,
				use:[
					'style-loader',
					'css-loader',
					'sass-loader'
				]
			},{
				test:/\.(png|jpg|svg|gif)$/,
				use:[
					'file-loader'
				]
			}
		]
	}
}