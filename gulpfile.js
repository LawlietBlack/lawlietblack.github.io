'use strict';

var gulp = require('gulp'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  rename = require('gulp-rename'),
  sass = require('gulp-sass'),
  maps = require('gulp-sourcemaps'),
  del = require('del'),
  cdnizer = require('gulp-cdnizer');


gulp.task('scripts', function() {
  gulp.src(['js/app.js'])
    .pipe(maps.init())
    .pipe(concat('app.js'))
    .pipe(uglify())
    .pipe(rename('app.min.js'))
    .pipe(maps.write('./'))
    .pipe(gulp.dest('./dist/js'))
});

gulp.task('sass', function() {
  gulp.src('scss/main.scss')
    .pipe(maps.init())
    .pipe(sass())
    .pipe(maps.write('./'))
    .pipe(rename('main.css'))
    .pipe(gulp.dest('styles/'))
})

gulp.task('default', ['scripts', 'sass'])

gulp.task('stream', ['sass'], () => {
  // gulp.watch('./main.html', ['cdnizer']);
  gulp.watch('scss/main.scss', ['sass']);
});


gulp.task('cdnizer', function() {
  gulp.src('./main.html')
    .pipe(cdnizer([
      'cdnjs:jquery',
      'google:angular',
      'google:angular-route',
      'cdnjs:angular-animate',
      'cdnjs:angular-aria',
      'cdnjs:angular-messages',
      'cdnjs:angular-material',
      'cdnjs:font-awesome',
      'jsdelivr:bootstrap'
      ]))
    .pipe(rename('index.html'))
    .pipe(gulp.dest('./'))
});
