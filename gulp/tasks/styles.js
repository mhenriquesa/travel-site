var gulp = require('gulp'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import'),
mixins = require('postcss-mixins'),
hex = require('postcss-hexrgba');

/*
	Consfiguração do PIPE do PostCSS 
	((lembrar sempre se adicionar cada filtro dentro do PIPE))
*/
gulp.task('styles', function () {
	return gulp.src('./app/assets/styles/styles.css')
	.pipe(postcss([cssImport, mixins, cssvars, nested, hex, autoprefixer]))
	//Adiciona um teste para erros no PIPE
	.on('error', function (errorInfo) {
		console.log(errorInfo.toString());
		this.emit('end');
	})
	// Fim do teste de errors
	.pipe(gulp.dest('./app/temp/styles'));
}); 