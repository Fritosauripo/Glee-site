const {
  src,
  dest,
  watch,
  parallel,
  series
} = require('gulp');

const scss = require('gulp-sass');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const del = require('del');
const browserSync = require('browser-sync').create();
const fileInclude = require('gulp-file-include');
const sprite = require('gulp-svg-sprite');

function browsersync() {
  browserSync.init({
    server: {
      baseDir: 'build/'
    }
  })
}

function styles() {
  return src('app/scss/style.scss')
    .pipe(scss({
      outputStyle: 'compressed'
    }))

    .pipe(concat('style.min.css'))
    .pipe(autoprefixer({
      overrideBrowserslist: ['last 10 versions'],
      grid: true
    }))
    .pipe(dest('./build/css'))
    .pipe(browserSync.stream())
}

function scripts() {
  return src([
      'node_modules/jquery/dist/jquery.js',
      'node_modules/slick-carousel/slick/slick.js',
      'node_modules/mixitup/dist/mixitup.js',
      'node_modules/magnific-popup/dist/jquery.magnific-popup.js',
      'app/js/main.js'
    ])
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(dest('build/js'))
    .pipe(browserSync.stream())
}

function svgSprite() {
  return src('app/images/content/sprite/*.svg')

    .pipe(sprite({
      mode: {
        stack: {
          sprite: '../sprite.svg'
        }
      }
    }))
    .pipe(dest('./build/images/'))
}

function html() {
  return src(['app/*.html', '!app/parts/**/*.html'])
    .pipe(fileInclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(dest('./build'))
    .pipe(browserSync.stream())
}

function fonts() {
  return src('app/fonts/*')
    .pipe(dest('build/fonts'))
}

function images() {
  return src('app/images/content/**/*')
    .pipe(dest('build/images/content/'))
}

// function images() {
//   return src('app/images/content/**/*.*')
//     .pipe(imagemin([
//       imagemin.gifsicle({
//         interlaced: true
//       }),
//       imagemin.mozjpeg({
//         quality: 75,
//         progressive: true
//       }),
//       imagemin.optipng({
//         optimizationLevel: 5
//       }),
//       imagemin.svgo({
//         plugins: [{
//             removeViewBox: true
//           },
//           {
//             cleanupIDs: false
//           }
//         ]
//       })
//     ]))
//     .pipe(dest('dist/images'))
// }

function build() {
  return src([
      'app/**/*.html',
      'app/css/style.min.css',
      'app/js/main.min.js'
    ], {
      base: 'app'
    })
    .pipe(dest('dist'))
}

function cleanDist() {
  return del('dist')
}

function watching() {
  watch(['app/scss/**/*.scss'], styles);
  watch(['app/js/**/*.js', '!app/js/main.min.js'], scripts);
  watch(['app/*.html'], html);
  watch('app/images/content/*', parallel('images'));
  watch('app/images/sprite/*', parallel('svgSprite'));
  watch('app/fonts/*', parallel('fonts'));
}

exports.styles = styles;
exports.scripts = scripts;
exports.browsersync = browsersync;
exports.watching = watching;
exports.images = images;
exports.cleanDist = cleanDist;
exports.svgSprite = svgSprite;
exports.html = html;
exports.fonts = fonts
exports.build = series(cleanDist, images, build);

exports.default = series(parallel(styles, scripts, fonts, html, images, svgSprite), parallel(browsersync, watching));