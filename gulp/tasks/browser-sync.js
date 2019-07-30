module.exports = () => {
  $.gulp.task('browserSync', () => {
    $.browserSync({
      server: {
        baseDir: $.config.output.html
      },
    });
  });
};
