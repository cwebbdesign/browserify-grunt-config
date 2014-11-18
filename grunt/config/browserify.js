module.exports = function (grunt, env) {
    'use strict';

    var config = {};

    // Set file path config object.
    config.paths = require('./paths');

    // These files should be present in core.js and will therefore be excluded from all
    // other bundles
    config.sharedLibs = [];

    config.transforms = [];

    config.external = [];

    return config;
};
