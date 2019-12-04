const gulp = require('gulp')
const browserSync = require('browser-sync').create()

// -----------Functions ---------------
function watch_files() {
  browserSyncInit()
  gulp.watch('./app/index.html', browserReload)
  gulp.watch('./app/assets/styles/**/*', gulp.series('styles', cssStream));
  gulp.watch('./app/assets/scripts/**/*.js', gulp.series('scripts', browserReload));
}

function browserSyncInit() {
  browserSync.init({
    notify: true,
    server: {
      baseDir: "app"
    },
    ghostMode: false
  })
}

function browserReload(cb) {
 browserSync.reload()
 cb()
}

function cssStream() {
  return gulp
  .src('./app/temp/styles/styles.css')
  .pipe(browserSync.stream())
}
// -----------/Functions-----------------

gulp.task('watch', watch_files)