var bOpts = {
    basedir:process.cwd(),
    fullPaths:false,
    debug: true
};

module.exports = {
    common: {
        src: [],

        dest: '<%= paths.dist.js %>/dist.common.js',

        options: {
            require: ['./src/js/common.js:./src/js/common.js'],
            transform: [],
            browserifyOptions: bOpts
        }
    },
    main: {
        src: ['./src/js/main.js'],

        dest: '<%= paths.dist.js %>/dist.main.js',

        options: {

            transform: [],
            external: ['./src/js/a.js'],
            browserifyOptions: {
                basedir:process.cwd(),//__dirname,//process.cwd(),
                fullPaths:false,
                debug: true
            }
        }
    },
    a: {
        src: [],

        dest: '<%= paths.dist.js %>/dist.a.js',

        options: {
            require: ['./src/js/a.js:./src/js/a.js'],
            transform: [],
            external: ['./src/js/b.js'],
            browserifyOptions: bOpts
        }
    },
    b: {
        src: [],

        dest: '<%= paths.dist.js %>/dist.b.js',

        options: {
            require: ['./src/js/b.js:./src/js/b.js'],
            transform: [],

            browserifyOptions: bOpts
        }
    }
}
