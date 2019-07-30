module.exports = () => {
  $.gulp.task('imagesBuild', () => {
    if ($.config.build) {
      return $.combiner(
        $.gulp.src($.config.app.img),
        $.imagemin({
          pngquant: true,
          optipng: false,
          zopflipng: true,
          jpegRecompress: false,
          mozjpeg: true,
          guetzli: false,
          gifsicle: true,
          svgo: true,
          concurrent: 10,
        }),
        $.gulp.dest($.config.output.img),
      );
    }

    return $.combiner(
      $.gulp.src($.config.app.img),
      $.gulp.dest($.config.output.img),
      $.browserSync.reload({
        stream: true
      }),
    );
  });
};
