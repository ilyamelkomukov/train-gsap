"use strict";

const gulp = require('gulp'),
  gulpIf = require('gulp-if'),
  less = require('gulp-less'),
  pug = require('gulp-pug'),
  sourcemaps = require('gulp-sourcemaps'),
  postcss = require('gulp-postcss');

var isDev = process.env.NODE_ENV == 'development',

  baseDir = __dirname,

  frontEnd = `${baseDir}/frontEnd/`,
  inputLayouts = `${frontEnd}/components/index.pug`,
  inputStyles = `${frontEnd}/styles`,

  build = `${baseDir}/build/`,
  outputStyles = `${build}/style`;
  
