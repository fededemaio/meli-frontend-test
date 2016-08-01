// include gulp
var gulp = require('gulp'); 

var changed = require('gulp-changed');

var sass = require('gulp-sass');
//var minifyCSS = require('gulp-minify-css');
var cleanCSS = require('gulp-clean-css');
var autoprefixer = require('gulp-autoprefixer');

var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');



//minifico el html.
//var minifyHTML = require('gulp-minify-html');
var htmlmin = require('gulp-htmlmin')

gulp.task('minify-html', function() {
  return gulp.src('src/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'))
});

//sass 
gulp.task('preprocess-css', function() {
    return gulp.src('src/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./src/css/'));

});

//postprocess & other
gulp.task('postprocess-css',['preprocess-css'], function () {
    return gulp.src('src/css/*.css')
        .pipe(sourcemaps.init())
        .pipe(cleanCSS())
        .pipe(autoprefixer())
        .pipe(concat('styles.min.css'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('src/css'))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('process-scripts', function(){
   return gulp.src([
		'src/js/jquery-2.1.4.min.js',
		'src/js/chico.min.js',
		'src/js/script.js'
   	])
   .pipe(concat('script.min.js'))
   .pipe(uglify())
   .pipe(gulp.dest('dist/js/'))
   .pipe(gulp.dest('src/js/'));
});

//gulp.task('process-css', ['preprocess-css','postprocess-css']);
gulp.task('build', ['minify-html','postprocess-css','process-scripts']);


