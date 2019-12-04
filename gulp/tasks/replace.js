const replace = require('gulp-replace')
const gulp = require('gulp')

function replaceString() {
    let anchor = '<script type="text/javascript" src="/temp/scripts/Vendor.js"></script>'
    return gulp.src('./app/index.html')
        .pipe(replace(anchor, '#isso é o novo string'))
        .pipe(gulp.dest('./dist'))
}

gulp.task('replace', replaceString)
