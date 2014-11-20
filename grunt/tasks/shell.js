module.exports = {
    //options: {
    //    stderr: false
    //},
    browserify: {
        command: [
            'browserify -r ./src/js/common.js -o ./dist/js/dist.common.js',
            'browserify -e ./src/js/main.js -x ./src/js/a.js -x ./src/js/common.js -o ./dist/js/dist.main.js',
            'browserify -x ./src/js/b.js -x ./src/js/common.js -r ./src/js/a.js -o ./dist/js/dist.a.js',
            'browserify -x ./src/js/common.js -r ./src/js/b.js -o ./dist/js/dist.b.js'
        ].join('&&')
    },
    browserifyApi: {
        command: 'node ./grunt/tasks/bundle.js'
    }
}
