const gulp = require("gulp");
const sass = require("gulp-sass");
const connect = require("gulp-connect");
const sourcemaps = require("gulp-sourcemaps");

gulp.task("sass", done => {

  gulp.src("sass/*")
    .pipe(sourcemaps.init())
    .pipe(sass({
      /*  outputStyle: "compressed" */
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("dist/css"))
    .pipe(connect.reload());

  done();
});

gulp.task("html", done => {
  gulp.src("*.html")
    .pipe(gulp.dest("dist"))
    .pipe(connect.reload());

  done();
});

gulp.task("css", done => {
  gulp.src("css/*")
    .pipe(gulp.dest("dist/css"))
    .pipe(connect.reload());

  done();
});
gulp.task("img", done => {
  gulp.src("img/*")
    .pipe(gulp.dest("dist/img"))
    .pipe(connect.reload());

  done();
});
gulp.task("js", done => {
  gulp.src("js/*")
    .pipe(gulp.dest("dist/js"))
    .pipe(connect.reload());

  done();
});

gulp.task("font", done => {
  gulp.src("font/*")
    .pipe(gulp.dest("dist/font"))
    .pipe(connect.reload());

  done();
});


gulp.task("server", done => {

  connect.server({
    "root": "dist",
    "livereload": true
  })

  done();
})

gulp.task("watch", done => {

  gulp.watch("sass/*", gulp.series("sass"));
  gulp.watch("*.html", gulp.series("html"));
  gulp.watch("img/*", gulp.series("img"));
  gulp.watch("css/*", gulp.series("css"));
  gulp.watch("js/*", gulp.series("js"));

  done();
});

gulp.task("default", gulp.series("server", "watch"));