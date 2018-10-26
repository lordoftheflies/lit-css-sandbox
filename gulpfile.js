const gulp = require('gulp');
const postcss = require('gulp-postcss');
const syntax = require('postcss-jsx');
const annotate = require('./postcss-comment-annotation.js');
const collect = require('./utils/postcss-collect-custom-properties.js');
const analyze = require('./utils/postcss-analyze-custom-properties.js');
const fs = require('fs');

gulp.task('annotate', function() {
  return gulp.src('src/**.css.js').pipe(
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

let customProperties = {};

gulp.task('collect', function() {
  return gulp.src('src/**.css.js').pipe(
    postcss(
      [
        collect(properties => {
          Object.assign(customProperties, properties);
          // console.log(props);
          // fs.writeFileSync('props.json', JSON.stringify(props), 'utf8');
        })
      ],
      {
        syntax
      }
    )
  );
});

gulp.task('analyze', ['collect'], function() {
  return gulp.src('src/**.css.js').pipe(
    postcss(
      [
        analyze({
          customProperties
        })
      ],
      {
        syntax
      }
    )
  );
});
