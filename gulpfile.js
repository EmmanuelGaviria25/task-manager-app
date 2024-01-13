const gulp = require('gulp');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');

// Tarea para minimizar el código
gulp.task('minify', () => {
  return gulp.src('src/**/*.js')
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('build'));
});

// Tarea de construcción que copia archivos y minimiza el código
gulp.task('build', gulp.series('minify', () => {
  return gulp.src(['src/**/*', '!src/**/*.js'])
    .pipe(gulp.dest('build'));
}));