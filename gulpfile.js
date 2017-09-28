var gulp = require("gulp");
var concat = require("gulp-concat");

gulp.task("default", function() {
  return gulp.src(["node_modules/normalize.css/normalize.css", "src/style.css"])
    .pipe(concat("style.css"))
    .pipe(gulp.dest("./dist"));
});
