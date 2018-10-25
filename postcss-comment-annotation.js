const postcss = require('postcss');

module.exports = postcss.plugin('postcss-comment-annotation', (callback) => {
  const prefix = '@';
  const newLine = '(?:\\r?\\n|.)*?)';
  const matchComment = `(\\${prefix}${newLine}(?=\\${prefix}|$)`;
  const matchKeyVal = `\\${prefix}(\\w*)\\s(${newLine}(?=\\r?\\n\\r?\\n|$)`;
  const matchBool = `\\${prefix}(\\w+)\\s*(?=\\n|$)`;

  return (root) => {
    const commentAnnotations = [];

    root.walkComments((comment) => {
      const annotationArray = comment.text.match(
          new RegExp(matchComment, 'g')
      );
      const annotationObj = {};

      if (annotationArray) {
        annotationArray.forEach((annotation) => {
            // Match @rule with single or multiline value after it
            if (annotation.match(new RegExp(matchKeyVal, 'g')) &&
              RegExp.$2 !== '\n') {
                const key = RegExp.$1;
                const val = RegExp.$2;

                val.replace(/^\s/g, '');

                // Create key:value pair
                annotationObj[key] = val;
            }

            // Match single @rule and treat as true
            if (annotation.match(new RegExp(matchBool, 'g'))) {
                const key = RegExp.$1;
                annotationObj[key] = annotationObj[key] || true;
            }
        });

        if (Object.getOwnPropertyNames(annotationObj).length !== 0) {
          commentAnnotations.push(annotationObj);
        }
      }
    });

    callback(commentAnnotations);
  };
});
