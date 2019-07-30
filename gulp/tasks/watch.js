module.exports = () => {
  $.gulp.task('watch', () => {
    $.gulp.watch([
      $.config.watch.db,
      $.config.watch.html
    ], $.gulp.series('htmlBuild'));
    $.gulp.watch($.config.watch.style, $.gulp.series('stylesBuild'));
    $.gulp.watch($.config.watch.js, $.gulp.series('scriptsBuild'));
    $.gulp.watch($.config.watch.img, $.gulp.series('imagesBuild'));
    $.gulp.watch($.config.watch.fonts, $.gulp.series('fontsBuild'));
  });
};
