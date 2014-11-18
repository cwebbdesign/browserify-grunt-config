/************************************************
 * Grunt Tasks                                  *
 ************************************************/

module.exports = function (grunt) {
    'use strict';

    // Load dependencies
    // ---------------------------------------------------------

    // Grunt performance tracking
    require('time-grunt')(grunt);
    var path = require('path');


    // Setup configuration for this run.
    // ----------------------------------------------------------
    var config = require('./grunt/config')(grunt),
        tasks = config.tasks;


    // Load all the tasks (npm modules) into the environment.
    // ----------------------------------------------------------
    tasks.forEach(function (npmTaskName) {
        grunt.loadNpmTasks(npmTaskName);
    });


    // Load task configuration.
    // ----------------------------------------------------------
    require('load-grunt-config')(grunt, {
        // path to task files
        configPath: path.join(process.cwd(), 'grunt/tasks'),
        data: config
    });

    // Global configuration: grunt/config/*.js
    // Task configuration: grunt/task/*.js
    // Task flows: grunt/task/flows.js
};
