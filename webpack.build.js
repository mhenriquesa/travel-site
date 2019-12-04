const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
	entry: {
		App: "./app/assets/scripts/App.js",
		Vendor: "./app/assets/scripts/Vendor.js"
	},
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "[name].[contentHash].js"
	},
	plugins: [new HtmlWebpackPlugin({
        template:'./app/index.ejs',
        inject: false
	})],
	module: {
	    rules: [
	      {
	        test: /\.js$/,
	        exclude: /node_modules/,
	        use: {
	          loader: 'babel-loader',
	          options: {
	            presets: ['@babel/preset-env']
	          }
	        }
          }, 
          {
            test: /\.tpl$/,
            loader: 'ejs-loader',
            query: {
              interpolate: /\{\{(.+)\}\}/g,
              escape: '<$-(.+?)$>',
              evaluate: /\[\[(.+)\]\]/g,
              engine: 'lodash',
            }
        }
	    ]
	  },
	mode: "production"
}