const gulp = require('gulp');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const del = require('del');
const browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
 


const scssFiles = [
    './src/scss/main.scss',
    './src/scss/content.scss'
];
const jsFiles = [
    './src/js/test.js',
    './src/js/secondtest.js',
    './src/js/abc.js'
];
function styles() {
	return gulp.src(scssFiles)
    .pipe(sass().on('error', sass.logError))
	.pipe(concat('style.css'))
	.pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./build/css'))
    .pipe(browserSync.stream());
}

function scripts() {
    return gulp.src(jsFiles)
		/*.pipe(uglify({
            toplevel: true
        }))
        */
        .pipe(concat('scripts.js'))

        .pipe(gulp.dest('./build/js'))
        .pipe(browserSync.stream());
}

function clean() {
    return del(['build/*'])
}

function watch() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch('./src/scss/**/*.scss', styles)

    gulp.watch('./src/js/**/*.js', scripts)

    gulp.watch("./*.html").on('change', browserSync.reload);
}

gulp.task('styles', styles) 
gulp.task('scripts', scripts);
gulp.task('del', clean);
gulp.task('watch', watch);
gulp.task('build', gulp.series(clean, gulp.parallel(styles, scripts)));
gulp.task('dev', gulp.series('build', 'watch'));