var gulp = require('gulp');
var concat = require('gulp-concat');
var notify = require('gulp-notify');
var flatten = require('gulp-flatten');  
var webserver = require('gulp-webserver');


//script task
gulp.task('scripts', function() {
    
    //JS, ki se bo izvedel
    // vrstni red!
    gulp.src(['src/app.js', 'src/**/*.js']) 
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./dist/js'))
    .pipe(notify('Javascript compiled.'));
    
})

gulp.task('move', function () {
    gulp.src(['./src/index.html'])
        .pipe(gulp.dest('./dist'));

    gulp.src(['!./src/index.html', './src/**/*.html'])
        .pipe(flatten())
        .pipe(gulp.dest('./dist/templates'))
        .pipe(notify("Moved HTML files!"));
});


gulp.task('serve', function () {
    gulp.src('.').pipe(webserver({
        port: 48080,
        livereload: true,
        open: 'http://localhost:48080/dist/'
    })).pipe(notify("Running webserver!"));
});

gulp.task('watch', ['serve'], function () {
    gulp.start(['scripts', 'move']);
    gulp.watch(['src/**/*.js'], ['scripts']);
    gulp.watch(['src/**/*.html'], ['move']);
});