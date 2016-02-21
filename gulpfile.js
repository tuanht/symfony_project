var gulp = require('gulp'),
    gulpif = require('gulp-if'),
    uglify = require('gulp-uglify'),
    uglifycss = require('gulp-uglifycss'),
    less = require('gulp-less'),
    concat = require('gulp-concat'),
    sourcemaps = require('gulp-sourcemaps'),
    livereload = require('gulp-livereload'),
    templateCache = require('gulp-angular-templatecache'),
    rev = require('gulp-rev'),
    del = require('del'),
    env = process.env.GULP_ENV,
    assetsPath = 'web/assets',
    imagesPath = assetsPath + '/images',
    basePath = env === 'prod' ? 'app/assets' : assetsPath;

//JAVASCRIPT TASK: write one minified js file out of jquery.js, bootstrap.js and all of my custom js files
gulp.task('js', function () {
    return gulp.src([
        'bower_components/jquery/dist/jquery.js',
        'bower_components/bootstrap/dist/js/bootstrap.js'
    ])
        .pipe(gulpif(env !== 'prod', sourcemaps.init()))
        .pipe(concat('javascript.min.js'))
        .pipe(gulpif(env === 'prod', uglify()))
        .pipe(gulpif(env !== 'prod', sourcemaps.write('./')))
        .pipe(gulp.dest(basePath))
});

//CSS TASK: write one minified css file out of bootstrap.less and all of my custom less files
gulp.task('css', function () {
    return gulp.src([
        'bower_components/bootstrap/dist/css/bootstrap.css'
    ])
        .pipe(gulpif(env !== 'prod', sourcemaps.init()))
        .pipe(gulpif(/[.]less/, less()))
        .pipe(concat('styles.min.css'))
        .pipe(gulpif(env === 'prod', uglifycss()))
        .pipe(gulpif(env !== 'prod', sourcemaps.write('./')))
        .pipe(gulp.dest(basePath))
        .pipe(livereload());
});

//Fonts TASK: Just pipe images from project folder to public web folder
gulp.task('fonts', function () {
    return gulp.src([
        'bower_components/bootstrap/dist/fonts/*.*',
        'bower_components/fontawesome/fonts/**.*'])
        .pipe(gulp.dest('web/fonts'));
});

//define executable tasks when running "gulp" command
gulp.task('default', [
    'js', 'css', 'fonts'
]);
