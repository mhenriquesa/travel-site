/*****************************/
var path = require('path'); /*pacote do Node.js apenas para simplificar o path*/
/******************************/

module.exports = {
	entry: "./app/assets/scripts/App.js",
	output: {
		path: path.resolve(__dirname, "./app/temp/scripts"),
		filename: "App.js"
	}, /* <---- Da virgula para baixo, é configuração do Babel.*/
	module: {
		loaders: [
		{
			loader: 'babel-loader',
			query: {
				presets: ['es2015']
			},
			test: /\.js$/,
			exclude: /node_modules/
		}
		]
	}
}