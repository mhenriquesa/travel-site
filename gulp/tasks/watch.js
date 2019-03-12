var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();

gulp.task('watch', function () {
	
	browserSync.init({
		// notify: false,
		server: {
			baseDir: "app"
		}
	});

	watch('./app/index.html', function () {
		browserSync.reload();
	});

	watch('./app/assets/styles/**/*.css', function () {
			gulp.start('cssInject');
	});
	
});

/*
----------------------------------------------------------------------------
	Usando o CSS injected do BrowserSync:

	gulp.task('qqNomeAqui', ['Aqui insere a task do PIPE do PostCSS'], function() {
	return gulp.src('Path do .css linkado no html')
		.pipe(browserSync.stream());

	OBS: o segundo argumento de gulp.task será uma task que é importante rodar antes.
});
*/

gulp.task('cssInject', ['styles'], function() {
	return gulp.src('./app/temp/styles/styles.css')
		.pipe(browserSync.stream());
});