global.$ = {
  gulp: require('gulp'),
  webpack: require('webpack-stream'),
  autoprefix: require('gulp-autoprefixer'),
  sass: require('gulp-sass'),
  tildeImporter: require('node-sass-tilde-importer'),
  minCss: require('gulp-clean-css'),
  sourcemaps: require('gulp-sourcemaps'),
  fs: require('fs-extra'),
  hbs: require('gulp-compile-handlebars'),
  rename: require('gulp-rename'),
  minHtml: require('gulp-htmlmin'),
  imagemin: require('gulp-image'),
  browserSync: require("browser-sync"),
  notify: require('gulp-notify'),
  combiner: require('stream-combiner2').obj,
  argv: require('yargs').argv,
  config: require('./gulp/config.js')(),
  tasks: require('./gulp/tasks.js')
};

$.tasks.forEach(item => require(item)());

$.gulp.task('dev', $.gulp.series(
  $.gulp.parallel('clean'),
  $.gulp.parallel('htmlBuild', 'stylesBuild', 'scriptsBuild', 'imagesBuild', 'fontsBuild'),
  $.gulp.parallel('watch', 'browserSync'),
));

$.gulp.task('build', $.gulp.series(
  $.gulp.parallel('clean'),
  $.gulp.parallel('htmlBuild', 'stylesBuild', 'scriptsBuild', 'imagesBuild', 'fontsBuild'),
));
