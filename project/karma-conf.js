module.exports = function (config) {
    config.set({

        basePath: '../',

        files: [
            'src/test/client/GlobalsVars.js',
            'bower_components/karma-read-json/karma-json-reader.js',
            'src/main/client/javascripts/**/*.js',
            'src/test/client/**/*Spec.js',
            'src/test/client/helper/*.js',
            {pattern: 'src/test/client/resources/*.json', watched: true, served: true, included: false}
        ],

        exclude: [],


        preprocessors: {
            'src/main/client/javascripts/**/*.js': 'coverage'
        },


        autoWatch: true,
        singleRun: false,

        frameworks: ['jasmine'],
        browsers: ['PhantomJS'],

        reporters: ['progress', 'html', 'junit', 'coverage'],

        htmlReporter: {
            outputDir: 'target/test-reports/html',
            focusOnFailures: true
        },

        junitReporter: {
            outputDir: 'target/test-reports'
        },

        coverageReporter: {
            type: 'html',
            dir: 'target/coverage/'
        }
    });
};
