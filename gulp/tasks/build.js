var gulp = require('gulp'),
 imagemin = require('gulp-imagemin'),
 del = require('del'),
 usemin = require('gulp-usemin'),
 rev = require('gulp-rev'),
 cssnano = require('gulp-cssnano'),
 uglify = require('gulp-uglify'),
 browserSync = require('browser-sync').create();
/**********Pacotes para o script*****************/


/*Limpa a /dist */
gulp.task('distClean', ['icons'], function () {
	return del(['./docs']);
})
/***********************************/

/*Copia arquivos gerais*/
gulp.task('copyGeneralFiles', ['distClean'], function () {
	var pathsToCopy = [
	'./app/**/*',
	'!./app/index.html',
	'!./app/assets/images/**',
	'!./app/assets/styles/**',
	'!./app/assets/scripts/**',
	'!./app/temp',
	'!./app/temp/**'
	]

	return gulp
		.src(pathsToCopy)
		.pipe(gulp.dest("./docs"));
});
/**************************************************/

/*Comprime imagens e transfere para /dist/assets */
gulp.task('optmizeImgs', ['distClean'], function () {
	return gulp
		.src(['./app/assets/images/**/*', '!./app/assets/images/icons', '!./app/assets/images/icons/**/*'])
		.pipe(imagemin({
			progressive: true,
			interlaced: true,
			multipass:true
		}))
		.pipe(gulp.dest("./docs/assets/images"));
});
/*********************************************************/

gulp.task('useminTrigger', ['distClean'], function () {
	gulp.start("usemin");
})

/*Comprime JS, CSS; Prepara HTML com rev para browsers atualizar e copia tud pra ./dist */

gulp.task('usemin', ['styles', 'scripts'], function () {
	return gulp
	.src("./app/index.html")
	.pipe(usemin({
		css: [function () {return rev()}, function() {return cssnano()}],
		js: [function() {return rev()}, function() {return uglify()}]
	}))
	.pipe(gulp.dest("./docs"));
});
/*************************************************************/

/*Watch para a dist*/
gulp.task('preDist', function () {
	
	browserSync.init({
		notify: false,
		server: {
			baseDir: "docs"
		}
	});
})



gulp.task('build', ['optmizeImgs','copyGeneralFiles', 'useminTrigger']);
