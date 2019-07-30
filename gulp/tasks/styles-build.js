module.exports = () => {
  $.gulp.task('stylesBuild', () => {
    if ($.config.build) {
      return $.combiner(
        $.gulp.src($.config.app.style),
        $.sass({
          importer: $.tildeImporter
        }),
        $.autoprefix(),
        $.minCss(),
        $.gulp.dest($.config.output.css)
      ).on('error', $.notify.onError(err => ({
        title: 'Styles error',
        message: err.message
      })));
    }

    return $.combiner(
      $.gulp.src($.config.app.style),
      $.sourcemaps.init(),
      $.sass({
        importer: $.tildeImporter
      }),
      $.autoprefix(),
      $.sourcemaps.write('.'),
      $.gulp.dest($.config.output.css),
      $.browserSync.reload({
        stream: true
      })
    ).on('error', $.notify.onError(err => ({
      title: 'Styles error',
      message: err.message
    })));
  });
};
