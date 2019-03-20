/*****************************/
var path = require('path'); /*pacote do Node.js apenas para simplificar o path*/
/******************************/

module.exports = {
	entry: {
		App: "./app/assets/scripts/App.js",
		Vendor: "./app/assets/scripts/Vendor.js" /*LazySizes*/
	},
	output: {
		path: path.resolve(__dirname, "./app/temp/scripts"),
		filename: "[name].js" /*No inicio era: "App.js"*/
	}, 

	/* <---- Da virgula para baixo, é configuração do Babel.*/
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