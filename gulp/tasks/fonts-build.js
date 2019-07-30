module.exports = () => {
  $.gulp.task('fontsBuild', () => {
    return $.combiner(
      $.gulp.src($.config.app.fonts),
      $.gulp.dest($.config.output.fonts),
      $.browserSync.reload({
        stream: true
      }),
    );
  });
};
