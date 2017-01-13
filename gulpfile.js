'use strict';

var gulp = require('gulp'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  rename = require('gulp-rename'),
  sass = require('gulp-sass'),
  maps = require('gulp-sourcemaps'),
  del = require('del'),
  plumber = require('gulp-plumber'),
  jshint = require('gulp-jshint'),
  utilities = require('gulp-util'),
  browserSync = require('browser-sync').create(),
  lib = require('bower-files')({
    "overrides": {
      "angular-material": {
        "main": [
          'angular-material.css',
          'angular-material.js'
        ]
      },
      "font-awesome": {
        "main": ['css/font-awesome.css']
      }
    }
  });

var inProd = utilities.env.production;

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

gulp.task('concatScripts', function() {
  return gulp.src('./js/app.js')
  .pipe(plumber())
  .pipe(maps.init())
  .pipe(concat('app.js'))
  .pipe(maps.write('./'))
  .pipe(plumber.stop())
  .pipe(gulp.dest('./build/js'))
});

gulp.task('minifyScripts', function() {
  return gulp.src('./js/app.js')
    .pipe(plumber())
    .pipe(maps.init())
    .pipe(concat('app.js'))
    .pipe(gulp.dest('./build/js'))
    .pipe(rename('app.js'))
    .pipe(uglify())
    .pipe(maps.write('./'))
    .pipe(plumber.stop())
    .pipe(gulp.dest('./build/js'));
});

gulp.task('sassImages', function() {
  gulp.src(['./img/sprites.png', './img/code.jpg'])
    .pipe(gulp.dest('./build/img'))
});

gulp.task('sass', ['sassImages'], function() {
  return gulp.src('scss/main.scss')
  .pipe(plumber())
  .pipe(maps.init())
  .pipe(sass())
  .pipe(maps.write('./'))
  .pipe(plumber.stop())
  .pipe(rename('main.css'))
  .pipe(gulp.dest('./build/css/'))
});

gulp.task('jshint', function() {
  return gulp.src(['js/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('clean', function() {
  return del(['build']);
});

gulp.task('bowerJS', function() {
  return gulp.src(lib.ext('js').files)
    .pipe(concat('vendor.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./build/js'));
});

gulp.task('bowerFonts', function() {
  gulp.src(['bower_components/devicon/fonts/*'])
  .pipe(gulp.dest('./build/css/fonts/'));
  gulp.src(['bower_components/font-awesome/fonts/*'])
  .pipe(gulp.dest('./build/fonts/'));

});

gulp.task('bowerCSS', ['bowerFonts'], function() {
  return gulp.src(lib.ext('css').files)
  .pipe(concat('vendor.css'))
  .pipe(gulp.dest('./build/css'));
});

gulp.task('bower', ['bowerJS', 'bowerCSS']);

gulp.task('build', ['clean'], function() {
  if(inProd) {
    gulp.start('minifyScripts');
  } else {
    gulp.start('concatScripts');
  }
  gulp.start('bower');
  gulp.start('sass');
});

gulp.task('reloadSass', ['sass'], function() {
  browserSync.reload();
});
gulp.task('reloadBower', ['concatScripts'], function() {
  browserSync.reload();
});
gulp.task('reloadJS', ['sass'], function() {
  browserSync.reload();
});

gulp.task('serve', function() {
  browserSync.init({
    server: {
      baseDir: './',
      index: 'index.html'
    }
  });
  gulp.watch(['js/app.js'], ['reloadJS']);
  gulp.watch(['bower.json'], ['reloadBower']);
  gulp.watch(['scss/*.scss'], ['reloadSass']);
});

gulp.task('default', ['serve']);