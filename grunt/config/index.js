module.exports = function (grunt) {
    'use strict';

        return {

            // Can be demo, development or production
            paths: require('./paths')(),

            // Grunt Tasks
            tasks: require('./tasks')(grunt)
        };

};