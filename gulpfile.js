var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
livereload = require('gulp-livereload');
 
/* Task to compile less */
gulp.task('compile-less', function() {  
  gulp.src('./less/style.less')
    .pipe(less())
    .pipe(gulp.dest('./css/'));
}); 
/* Task to watch less changes */
gulp.task('watch-less', function() {  
  gulp.watch('./less/**/*.less' , ['compile-less']);
  livereload.listen();
  livereload.reload(['accademin_article_as_.html']);
});