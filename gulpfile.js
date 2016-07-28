'use strict';

var gulp = require('gulp'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  rename = require('gulp-rename'),
  sass = require('gulp-sass'),
  maps = require('gulp-sourcemaps'),
  del = require('del'),
  plumber = require('gulp-plumber');


var source = {
  scripts: [
    'bower_components/jquery/dist/jquery.js',
    'bower_components/angular/angular.js',
    'bower_components/angular-sanitize/angular-sanitize.js',
    'bower_components/angular-route/angular-route.js',
    'bower_components/angular-animate/angular-animate.js',
    'bower_components/angular-aria/angular-aria.js',
    'bower_components/angular-sanitize/angular-sanitize.js',
    'bower_components/angular-messages/angular-messages.js',
    'bower_components/angular-material/angular-material.js',
    'bower_components/bootstrap/dist/js/bootstrap.js',
    'js/app.js'
  ]
};

gulp.task('scripts', function() {
  return gulp.src(source.scripts)
    .pipe(plumber())
    .pipe(maps.init())
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest('./js'))
    .pipe(rename('bundle.min.js'))
    .pipe(uglify())
    .pipe(maps.write('./'))
    .pipe(plumber.stop())
    .pipe(gulp.dest('./js'));
});

gulp.task('sass', function() {
  return gulp.src('scss/main.scss')
    .pipe(plumber())
    .pipe(maps.init())
    .pipe(sass())
    .pipe(maps.write('./'))
    .pipe(plumber.stop())
    .pipe(rename('main.css'))
    .pipe(gulp.dest('styles/'))
});

gulp.task('default', ['scripts', 'sass']);

gulp.task('stream', ['sass'], () => {
  gulp.watch('scss/*.scss', ['sass']);
});

