// Returns a path object
module.exports = function() {
    'use strict;'

    // Declare Dependencies
    // ------------------------------------------------------
    var deepLoop = require('utilikit/lib/object/deepLoop');
    var _ = require('lodash');


    // Begin Module
    // ------------------------------------------------------

    var config = {
        // Root
        rootpath: '.',

        // Defined from the root
        assets: {
            css: '/src/scss',
            js: '/src/js',
            images: '/src/images',
            fonts: '/src/fonts'
        },

        dist: {
            css: '/dist/css',
            js: '/dist/js',
            images: '/dist/images',
            fonts: '/dist/fonts'
        },
        app: '/src/js/app',
        components: '/src/js/components',
        bowerdir: '/src/js/bower_components'
    };


    paths = deepLoop(_.cloneDeep(config), prefixPaths);

    // Transform all path values in the object.
    function prefixPaths(obj, key) {

        var value = obj[key],
            root = config.rootpath;

        return obj[key] = value !== root
            ? root + value
            : root;
    }

    // Return the configuration object
    return paths;
};