// Подключаем модули Gulp
const gulp = require('gulp');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const del = require('del');
const browserSync = require('browser-sync').create();
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');

// Порядок подключения scss файлов

const scssFiles = [
    './projectSkalar/scss/style.scss',
    './projectSkalar/scss/_grid.scss',
    './projectSkalar/scss/_interface.scss',
    './projectSkalar/scss/_fonts.scss',
    './projectSkalar/scss/_colors.scss'
];

// Порядок подключения css файлов
const cssFiles = [
    './projectSkalar/css/normalize.css'
];

// Порядок подключения js файлов
const jsFiles = [
    './projectSkalar/js/script.js',
    './projectSkalar/js/jquery-3.3.1.min.js'
];

// Порядок подключения картинок
const imgFiles = [
    './projectSkalar/images/*.jpg',
    './projectSkalar/images/*.png'
];

function img() {
    return gulp.src(imgFiles)
        .pipe(gulp.dest('./build/images'))
}

function cssStyles() {
    return gulp.src(cssFiles)
    .pipe(gulp.dest('./build/css'))
}


// Таск на стили SCSS
function styles() {
    return gulp.src(scssFiles)
        .pipe(sourcemaps.init())
        .pipe(sass())
        // Объединение файлов в один
        .pipe(concat('style.css'))
        // Добавить префиксы
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        // Минифицирование файлов
        .pipe(cleanCSS({
            level: 2 // Жесткое уменьшение размера файла
        }))
        .pipe(sourcemaps.write('./'))
    
        // Выходная папка для стилей
        .pipe(gulp.dest('./build/css'))
        .pipe(browserSync.stream());
}

// Таск на скрипты JS
function scripts() {
    return gulp.src(jsFiles)
        // Минификация JS
        .pipe(uglify({
            toplevel: true
        }))
        .pipe(gulp.dest('./build/js'))
        .pipe(browserSync.stream());
}


// Удалить все в указанной папке
function clean() {
    return del(['build/*'])
}

// Функция отслеживания watch
function watch() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    // Следить за SCSS-файлами
    gulp.watch('./projectSkalar/scss/**/*.scss', styles)
    // Следить за JS-файлами
    gulp.watch('./projectSkalar/js/**/*.js', scripts)
    // При изменении HTML запустить синхонизацию
    gulp.watch("./*.html").on("change", browserSync.reload);
}

// Таск, вызывающий функцию cssStyles
gulp.task('cssStyles', cssStyles)

// Таск, вызывающий функцию img
gulp.task('img', img);

// Таск, вызывающий функцию styles
gulp.task('styles', styles);

// Таск, вызывающий функцию scripts
gulp.task('scripts', scripts);


// Таск, вызывающий очистку
gulp.task('del', clean);

// Таск для отслеживания изменений
gulp.task('watch', watch);

// Таск для удаления файлов в папке build и запуск styles, scripts
gulp.task('build', gulp.series(clean, gulp.parallel(styles, scripts, img, cssStyles)));

// Таск запускает таск build и watch последовательно
gulp.task('dev', gulp.series('build', 'watch'));


























































