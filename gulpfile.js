const { src, dest, watch, parallel, series } = require('gulp')

const scss = require('gulp-sass')
const concat = require('gulp-concat')
const browserSync = require('browser-sync').create()
const fileInclude = require('gulp-file-include')
const autoprefixer = require('gulp-autoprefixer')
const del = require('del')
const imagemin = require('gulp-imagemin')
const webpackStream = require('webpack-stream')

const paths = {
    root: './dist',
    html: {
        src: './src/html/*.html',
        dest: './dist/html',
        main: '.dist/index.html'
    },
    styles: {
        common: './src/scss/common.scss',
        src: './src/scss/**/*.scss',
        dest: './dist/styles'
    },
    scripts: {
        common: './src/js/common.js',
        src: './src/js/**/*.js',
        dest: './dist/js',
        config: './webpack.config.js'
    },
    images: {
        src: './src/images/**/*.+(png|jpg|gif|ico|svg|webp)',
        dest: './dist/images'
    }
}

function js() {
    return src(paths.scripts.common)
        .pipe(webpackStream(require(paths.scripts.config)))
        .pipe(dest(paths.scripts.dest))
        .pipe(browserSync.stream())
}

function clean() {
    return del(paths.root)
}

function styles() {
    return src(paths.styles.common)
        .pipe(scss({ outputStyle: 'compressed' }))
        .pipe(concat('main.min.css'))
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 10 version'],
            grid: true
        }))
        .pipe(dest(paths.styles.dest))
        .pipe(browserSync.stream())
}

function watching() {
    watch(paths.styles.src, styles)
    watch(paths.images.src, images)
    watch(paths.html.src, html)
    watch(paths.scripts.src, js)
}

function browsersync() {
    browserSync.init({
        server: {
            baseDir: "./dist",
            index: "/html/index.html" 
        },
        notify: false
    });
}

function html() {
    return src(paths.html.src)
        .pipe(fileInclude())
        .pipe(dest(paths.html.dest))
        .pipe(browserSync.stream())
}

function images() {
    return src(paths.images.src)
        .pipe(imagemin([
            imagemin.gifsicle({ interlaced: true }),
            imagemin.mozjpeg({ quality: 75, progressive: true }),
            imagemin.optipng({ optimizationLevel: 5 }),
            imagemin.svgo({
                plugins: [
                    { removeViewBox: true },
                    { cleanupIDs: false }
                ]
            })
        ]))
        .pipe(dest(paths.images.dest))
        .pipe(browserSync.stream())
}

exports.build = series(clean, parallel(html, styles, js, images))
exports.default = parallel(browsersync, watching)

exports.html = html
exports.styles = styles
exports.images = images
exports.js = js

exports.watching = watching
exports.browsersync = browsersync
exports.clean = clean
