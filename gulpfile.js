const gulp = require('gulp');
const postcss = require('gulp-postcss');
const jsxSyntax = require('postcss-jsx');
const annotate = require('./postcss-comment-annotation.js');

gulp.task('annotate', function() {
  return gulp.src('src/custom-prop.js').pipe(
    postcss(
      [
        annotate(function(data) {
          console.log(data);
        })
      ],
      {
        syntax: jsxSyntax
      }
    )
  );
});
