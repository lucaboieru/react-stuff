var gulp = require('gulp');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');
var babelify = require('babelify');

gulp.task('browserify', function() {
    gulp.src('src/main.js')
      .pipe(browserify({transform: 'babelify'}))
      .pipe(concat('main.js'))
      .pipe(gulp.dest('public'));
});

gulp.task('copy', function() {
    gulp.src('src/index.html')
      .pipe(gulp.dest('public'));
});

gulp.task('default', ['watch']);

gulp.task('watch', ['browserify', 'copy'], function() {
    gulp.watch('src/**/*.*', ['browserify', 'copy']);
});
