var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var inlinesource = require('gulp-inline-source');
var clean = require('gulp-clean');
const babel = require('gulp-babel');

gulp.task('default', ['inlinesource'] ,function() {
  gulp.start('clean');
});

gulp.task('css', function () {
  return gulp.src('src/css/*-*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions', '> 5%']
    }))
    .pipe(gulp.dest('.'));
});

gulp.task('inlinesource', ['css', 'javascript'], function () {
    return gulp.src('src/html/*-*.html')
        .pipe(inlinesource({
          compress: false
        }))
        .pipe(gulp.dest('.'));
});

gulp.task('javascript', function() {
	return gulp.src('src/javascript/*-*.js')
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(gulp.dest('.'));
});

gulp.task('clean', function () {
	return gulp.src(['*-*.js', '*-*.css'], {read: false})
		.pipe(clean());
});
