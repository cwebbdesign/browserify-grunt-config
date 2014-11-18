module.exports = function (grunt, options) {

    grunt.registerTask('dist', 'the not a build, build', ['clean:dist', 'copy:modernizr', 'browserify']);

    return grunt;
}
