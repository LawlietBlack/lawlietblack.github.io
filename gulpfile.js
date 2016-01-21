'use strict';

var gulp = require('gulp'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename'),
	sass = require('gulp-sass'),
	maps = require('gulp-sourcemaps'),
	del = require('del'),
	vulcanize = require('vulcanize'),
	cdnizer = require('gulp-cdnizer');


gulp.task('concatScripts', function() {
	return gulp.src([])
});

gulp.task('cndizer', function() {
	return gulp.src('./index.html')
		.pipe(cdnizer({
			allowRev: true,
			allowMin: true,
			files [
				'google:angular',
				'cdnjs:jquery'
			]
		}))
		.pipe(gulp.dest('./dist'))
})
