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
	gulp.src('css/main.scss')
		.pipe(maps.init())
		.pipe(sass())
		.pipe(maps.write('./'))
		.pipe(gulp.dest('dist/css'))
})

gulp.task('cdnizer', function() {
	gulp.src('./main.html')
		.pipe(cdnizer([
				'google:angular',
				'google:angular-route',
				'cdnjs:jquery',
				'cdnjs:font-awesome',
				'jsdelivr:bootstrap',
				'cdnjs:webcomponentsjs:webcomponents-lite.js',
				{
					file: 'bower_components/polymer/polymer.html',
					package: 'polymer',
					cdn: '//cdn.rawgit.com/download/polymer-cdn/1.2.3/lib/polymer/polymer.html'
				}, {
					file: 'bower_components/paper-card/paper-card.html',
					package: 'paper-card',
					cdn: '//cdn.rawgit.com/download/polymer-cdn/1.2.3/lib/paper-card/paper-card.html'
				}, {
					file: 'bower_components/paper-tabs/paper-tabs.html',
					package: 'paper-tabs',
					cdn: '//cdn.rawgit.com/download/polymer-cdn/1.2.3/lib/paper-tabs/paper-tabs.html'
				}, {
					file: 'bower_components/paper-button/paper-button.html',
					package: 'paper-button',
					cdn: '//cdn.rawgit.com/download/polymer-cdn/1.2.3/lib/paper-button/paper-button.html'
				}, {
					file: '/bower_components/devicon/devicon.min.css',
					cdn: '//cdn.rawgit.com/konpa/devicon/master/devicon.min.css'
				}, {
					file: 'css/normalize.css',
					cdn: '//cdnjs.cloudflare.com/ajax/libs/normalize/3.0.3/normalize.min.css'
				}
			]))
		.pipe(rename('index.html'))
		.pipe(gulp.dest('./'))
})

gulp.task('default', ['scripts', 'sass'])