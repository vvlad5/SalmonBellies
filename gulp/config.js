module.exports = () => {
  const mode = process.argv[2];
  let build = null;
  let outputDir = null;
  let wpConfig = null;

  if (mode === 'build') {
    build = true;
    wpConfig = require('./wp-config.js')().prod;
    outputDir = 'dist';
  } else {
    build = false;
    wpConfig = require('./wp-config.js')().dev;
    outputDir = '.tmp';
  }

  const hbsOptions = require('./hbs-options.js')();

  return {
    build,
    wpConfig,
    hbsOptions,
    app: {
      html: 'app/html/*.hbs',
      htmlParts: 'app/html/**/*.hbs',
      js: 'app/scripts/main.js',
      style: 'app/styles/main.scss',
      img: 'app/images/**/*.{png,gif,jpg,jpeg,svg}',
      fonts: 'app/fonts/**/*.*',
      db: 'app/db/db.json'
    },
    output: {
      html: `${outputDir}/`,
      js: `${outputDir}/js/`,
      css: `${outputDir}/css/`,
      img: `${outputDir}/images/`,
      fonts: `${outputDir}/fonts/`
    },
    watch: {
      html: 'app/html/**/*.hbs',
      js: 'app/scripts/**/*.js',
      style: 'app/styles/**/*.scss',
      img: 'app/images/**/*.*',
      fonts: 'app/fonts/**/*.*',
      db: 'app/db/db.json'
    },
    buildDir: 'dist',
    devDir: '.tmp'
  };
};
