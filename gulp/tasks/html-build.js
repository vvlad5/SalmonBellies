module.exports = () => {
  $.gulp.task('htmlBuild', () => {
    const data = JSON.parse($.fs.readFileSync($.config.app.db));
    const options = $.config.hbsOptions;

    return $.combiner(
      $.gulp.src($.config.app.html),
      $.hbs(data, options),
      $.rename(path => {
        path.extname = '.html';
      }),
      $.minHtml({
        collapseWhitespace: true
      }),
      $.gulp.dest($.config.output.html),
      $.browserSync.reload({
        stream: true
      })
    ).on('error', $.notify.onError(err => ({
      title: 'HTML error',
      message: err.message
    })));
  });
};
