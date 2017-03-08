var gulp = require('gulp'),
    runSequence = require('run-sequence');

process.env.NODE_ENV = 'production';

gulp.task('build-prod', function (callback) {
    runSequence(
        [
            'images',
            'scripts',
            'styles',
            'fonts',
            'files',
            'pages'
        ],
        callback
    );
});
