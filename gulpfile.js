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
    './src/scss/content.scss',
    './src/scss/lmenu.scss',
    './src/scss/icons.scss',
    './src/scss/grid.scss',
    './src/scss/checkbox.scss'
];
const jsFiles = [
    './src/js/jquery.classyloader.js',
    './src/js/progress.js',
    './src/js/graph.js',
    './src/js/round_bar.js',
    './src/js/lmenu.js',
    './src/js/close_collapse.js',
    './src/js/labels.js',
    './src/js/all_checkbox.js'
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
        
        .pipe(concat('scripts.js'))
        //.pipe(uglify())
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