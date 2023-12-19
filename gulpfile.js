'use strict';
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');
const srcFile = './src/styles/*.scss';
function defaultTask () {
    return gulp.src(srcFile)
        .pipe(sass().on('error', sass.logError))
        .pipe(cssmin())
        .pipe(rename({suffix:'.min'}))
        .pipe(gulp.dest('./dist/styles'));
}
exports.default = defaultTask
exports.watch = function () {
    gulp.watch (srcFile, gulp.series('default'));
}