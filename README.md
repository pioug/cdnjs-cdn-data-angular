# cdnjs-cdn-data-angular

> [cdnjs](https://cdnjs.com/) data for [google-cdn](https://github.com/passy/google-cdn).

This module makes it easy to replace references in your app with links to the Angular libraries on the Google CDN.

## Install

```bash
$ npm install --save-dev google-cdn cdnjs-cdn-data-angular
```

## Usage

*package.json*:
```json
{
  "name": "my-awesome-app",
  "dependencies": {
    "angular": "1.6.6"
  }
}
```

```javascript
const googlecdn = require('google-cdn');
const fs = require('fs');
const assert = require('chai').assert;

const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
const markup = '<script src="node_modules/angular/angular.js"></script>';

googlecdn(markup, packageJson, { cdn: require('cdnjs-cdn-data-angular') }, function(err, result) {
  if (err) {
    throw err;
  }
  assert.equal(result, '<script src="//ajax.googleapis.com/ajax/libs/angularjs/1.6.6/angular.min.js"></script>');
});
```

### Easy usage with gulp-google-cdn

```javascript
const gulp = require('gulp');
const googlecdn = require('gulp-google-cdn');

gulp.task('default', function () {
  return gulp.src('index.html')
    .pipe(googlecdn(require('./package.json'), {
      componentsPath: 'node_modules',
      cdn: require('cdnjs-cdn-data-angular')
    }))
    .pipe(gulp.dest('dist'));
});
```

## License

MIT
