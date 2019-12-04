const gulp = require('gulp')
const del = require('del')
const imagemin = require('gulp-imagemin')

function distClean() {
    return del(['./dist']);
}

function copyGeneralFiles() {
    let pathsToCopy = [
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
        .pipe(gulp.dest("./dist"));
}

function optimizeImgs() {
    return gulp
		.src(['./app/assets/images/**/*', '!./app/assets/images/icons', '!./app/assets/images/icons/**/*'])
		.pipe(imagemin({
			progressive: true,
			interlaced: true,
			multipass:true
		}))
		.pipe(gulp.dest("./dist/assets/images"));
}

gulp.task('criarDist', gulp.series(distClean, copyGeneralFiles, 'icons', optimizeImgs))