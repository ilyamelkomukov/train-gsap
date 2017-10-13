"use strict";

/*** Start gulp plugins ***/

const gulp = require('gulp'),
  gulpIf = require('gulp-if'),
  less = require('gulp-less'),
  pug = require('gulp-pug'),
  sourcemaps = require('gulp-sourcemaps'),
  postcss = require('gulp-postcss'),
  bs = require('browser-sync'),
  webpack = require('webpack'),
  gulpWebpack = require('gulp-webpack');
  /*** End gulp plugins ***/


  /*** Start project paths ***/

var isDev = process.env.NODE_ENV == 'development',

  baseDir = __dirname,

  frontEnd = `${baseDir}/frontEnd/`,
  inputLayouts = `${frontEnd}/components/`,
  inputStyles = `${frontEnd}/styles/`,
  inputScripts = `${frontEnd}/scripts/`,
  inputImgs = `${frontEnd}/imgs/`,

  build = `${baseDir}/build/`,
  outputStyles = `${build}/style/`,
  outputScripts = `${build}/script/`,
  outputImgs = `${build}/imgs/`;

  /*** End project paths ***/

  /*** Start layouts task ***/

gulp.task("layouts", () => {
  return gulp.src(`${inputLayouts}/index.pug`)
    .pipe(pug())
    .pipe(gulp.dest(build));
});
/*** End layouts task ***/

/*** Start styles task ***/

gulp.task("styles", () => {
  return gulp.src(`${inputStyles}/main.less`)
    .pipe(gulpIf(isDev, sourcemaps.init()))
    .pipe(less())
    .pipe(postcss())
    .pipe(gulpIf(isDev, sourcemaps.write('./')))
    .pipe(gulp.dest(outputStyles));
});
/*** End styles task ***/


gulp.task("pics", () => {
  return gulp.src(`${inputImgs}/*.*`)
    .pipe(gulp.dest(`${outputImgs}`));
});

/*** Start js task ***/

gulp.task('js', () => {
  return gulp.src(`${inputScripts}/main.js`)
    .pipe(gulpWebpack({
      devtool: isDev ? 'cheap-eval-source-map' : false,
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
              presets: [
                ["env", {
                  "targets": {
                    "browsers": ['>1%', "last 10 versions", "IE 9"]
                  }
                }]
              ]
            }
          }
        ]
      },
      output: {
        filename: isDev ? '[name].js' : '[name]-[hash].js'
      }
    }, webpack))
    .pipe(gulp.dest(outputScripts));
});

/*** Start js task ***/


/*** Start serve task ***/

gulp.task("serve", (done) => {
  bs.init({
    server: {
      baseDir: build
    }
  });
  done();
});

/*** End serve task ***/

/*** Start watch task ***/

gulp.task('watch', (done) => {
  gulp.watch(`${inputLayouts}/**/*.pug`, gulp.series('layouts'));
  gulp.watch( [`${inputStyles}/**/*.less`, `${inputLayouts}/**/*.less`], gulp.series('styles') );
  gulp.watch( `${inputImgs}/*.*`, gulp.series('pics') );
  gulp.watch( [`${inputScripts}/*.js`, `${inputLayouts}/**/*.js`], gulp.series('js') );

  done();
});

/*** end watch task ***/


gulp.task('default', gulp.series(
  gulp.parallel(
    'layouts', 'pics', 'styles', 'js'
  ),
  'serve',
  'watch'
), (done) => {
  done();
});
