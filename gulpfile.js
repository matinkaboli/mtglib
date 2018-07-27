const del = require('del');
const gulp = require('gulp');
const eslint = require('gulp-eslint');
const webpack = require('webpack-stream');

const webpackDev = require('./webpack/dev');

gulp.task('lint', () => gulp.src(['**/*.js', '!node_modules/**'])
  .pipe(eslint())
  .pipe(eslint.format())
  .pipe(eslint.failAfterError()));


gulp.task('clean', () => del([
  'build/**',
  '!build',
]));

gulp.task('dev', ['clean'], () => gulp.src('src/index.js')
  .pipe(webpack(webpackDev))
  .pipe(gulp.dest('build/')));
