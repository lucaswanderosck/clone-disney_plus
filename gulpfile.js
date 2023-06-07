const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const imagemin = require("gulp-imagemin");

// Função para o sass
function styles() {
  return gulp
    .src("./src/styles/*.scss")
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(gulp.dest("./dist/css"));
}

// Função para comprimir as imagens
function comprimeImg() {
  return gulp
    .src("./src/images/**/*")
    .pipe(imagemin())
    .pipe(gulp.dest("./dist/images"));
}

// exportação
exports.default = gulp.parallel(styles, comprimeImg);

exports.watch = function () {
  gulp.watch("./src/styles/*.scss", gulp.parallel(styles));
};
