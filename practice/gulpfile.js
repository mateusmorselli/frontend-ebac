import gulp from 'gulp';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import imagemin from 'gulp-imagemin';
import uglify from 'gulp-uglify';
import concat from 'gulp-concat';

const sass = gulpSass(dartSass);

// Tarefa para compilar SASS
gulp.task('sass', function () {
    return gulp.src('source/styles/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(gulp.dest('dist/css'));
});

// Tarefa para comprimir imagens
gulp.task('imagemin', function () {
    return gulp.src('source/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'));
});

// Tarefa para comprimir e concatenar JavaScript
gulp.task('js', function () {
    return gulp.src('source/scripts/*.js')
        .pipe(concat('scripts.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

// Tarefa para observar mudanças nos arquivos
gulp.task('watch', function () {
    // Observa mudanças nos arquivos SASS
    gulp.watch('source/styles/*.scss', gulp.series('sass'));

    // Observa mudanças nas imagens
    gulp.watch('source/images/*', gulp.series('imagemin'));

    // Observa mudanças nos arquivos JavaScript
    gulp.watch('source/scripts/*.js', gulp.series('js'));
});

// Tarefa padrão que executa todas as tarefas e fica observando mudanças
gulp.task('default', gulp.series('sass', 'imagemin', 'js', 'watch'));