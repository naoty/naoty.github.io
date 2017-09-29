var gulp = require("gulp");
var concat = require("gulp-concat");
var cleanCSS = require("gulp-clean-css");
var sourcemaps = require("gulp-sourcemaps");

gulp.task("default", function() {
  srcFiles = [
    "node_modules/normalize.css/normalize.css",
    "src/style.css",
    "src/mobile.css"
  ];

  return gulp.src(srcFiles)
    .pipe(sourcemaps.init())
      .pipe(concat("style.css"))
      .pipe(cleanCSS())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("./dist"));
});
