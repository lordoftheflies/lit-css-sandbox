const gulp = require('gulp');
const postcss = require('gulp-postcss');
const syntax = require('postcss-jsx');
const analyze = require('./tools/postcss-analyze-custom-properties.js');
const path = require('path');
const fs = require('fs');

gulp.task('analyze', function() {
  return gulp.src('src/components/**/*.css.js').pipe(
    postcss(
      [
        analyze(result => {
          const name = path.basename(result.file, '.css.js');
          const data = result.data;
          const api = data.filter(item => item.name && item.name.startsWith(`--${name}`));
          if (api.length) {
            fs.writeFileSync(
              `data/components/${name}.json`,
              JSON.stringify(api, null, 2),
              'utf8'
            );
          }
        })
      ],
      {
        syntax
      }
    )
  );
});
