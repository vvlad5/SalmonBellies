module.exports = () => {
  $.gulp.task('scriptsBuild', () => {
    if ($.config.build) {
      return $.combiner(
        $.gulp.src($.config.app.js),
        $.webpack($.config.wpConfig),
        $.gulp.dest($.config.output.js)
      ).on('error', $.notify.onError(err => ({
        title: 'Scripts error',
        message: err.message
      })));
    }

    return $.combiner(
      $.gulp.src($.config.app.js),
      $.webpack($.config.wpConfig),
      $.gulp.dest($.config.output.js),
      $.browserSync.reload({
        stream: true
      })
    ).on('error', $.notify.onError(err => ({
      title: 'Scripts error',
      message: err.message
    })));
  });
};
