var gulp = require('gulp'),
	concatCss = require('gulp-concat-css'),
	rename = require('gulp-rename'),
	minifyCSS = require('gulp-csso');

gulp.task('concat', function () {
  return gulp.src('./css/*.css')
    .pipe(concatCss("bundle.css"))
    .pipe(minifyCSS())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./build/'));
});

gulp.task('default', [ 'concat']);