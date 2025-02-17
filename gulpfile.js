const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

gulp.task("html", function () {
    return gulp.src("*.html")
        .pipe(gulp.dest("dist"));
});

gulp.task("build", gulp.series("html"));

async function images() {
    const imagemin = (await import('gulp-imagemin')).default;
    return gulp.src('./src/midia/imagens/*')
    .pipe(imagemin())
    .pipe(gulp.dest('.dist/midia/images'));
}

function styles() {
    return gulp.src('./src/styles/*.scss')
    .pipe(sass({ outputStyle: 'compressed'}))
    .pipe(gulp.dest('./dist/css'))
}

exports.default = gulp.parallel(images, styles, );

exports.watch = function(done){
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles));
    done();
}