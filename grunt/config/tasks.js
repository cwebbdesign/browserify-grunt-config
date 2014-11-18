module.exports = function (grunt) {

    // Load all task plugins
    // ----------------------

    // Borrowing this from facebook's react gruntfile
    // Loop through package.json's devDependencies
    // see which ones are grunt related and load the task
    // we could also use jit-grunt or load-grunt-tasks
    var tasks = Object.keys(grunt.file.readJSON('package.json').devDependencies)
        .filter(function (npmTaskName) {
            return npmTaskName.indexOf('grunt-') === 0;
        })
        .filter(function (npmTaskName) {
            return npmTaskName != 'grunt-cli';
        })

    return tasks;

};
