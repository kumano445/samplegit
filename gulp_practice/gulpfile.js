const gulp = require('gulp');
const sass = require('gulp-sass')(require("sass"));

gulp.task('default', function () {

  return gulp.watch('sass/**/*.scss', function () {
  return gulp.src('sass/**/*.scss')
  .pipe(sass({
  outputStyle: 'expanded'
  })
  .on('error', sass.logError))
  .pipe(gulp.dest('css'));
  });
});