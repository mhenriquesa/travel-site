const gulp = require('gulp'),
webpack = require('webpack');

// Functions -----------
function webpackPipe(cb) {
	webpack(require('../../webpack.config.js'), webpackTest)
	cb()
}

function webpackTest(err, stats) {
	if (err) {
		console.log(err.toString());
	}
	console.log(stats.toString());
}
// ----------------------

gulp.task('scripts', webpackPipe);


/* Codigo Antigo para avaliar --------------------------


var gulp = require('gulp'),
webpack = require('webpack');

gulp.task('scripts', ['modernizr'], function (callback) {
	webpack(require('../../webpack.config.js'), function(err, stats) {
		if (err) {
			console.log(err.toString());
		}
		console.log(stats.toString());
		callback();
	})
})*/