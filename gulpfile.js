var gulp = require("gulp");
var concat = require("gulp-concat");
var cleanCSS = require("gulp-clean-css");

gulp.task("default", function() {
  return gulp.src(["node_modules/normalize.css/normalize.css", "src/style.css"])
    .pipe(concat("style.css"))
    .pipe(cleanCSS())
    .pipe(gulp.dest("./dist"));
});
