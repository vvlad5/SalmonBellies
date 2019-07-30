module.exports = () => {
  $.gulp.task('clean', async () => {
      await $.fs.remove($.config.devDir);
      await $.fs.remove($.config.buildDir);
  });
};
