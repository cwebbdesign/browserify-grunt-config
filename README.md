# browserify-grunt-config

A quick demo of my external browserify bundle setup and working examples of how to build it.

## Installation


    git clone https://github.com/cwebbdesign/browserify-grunt-config
    npm install
    grunt dist
    node server

  Go to localhost:8080/index.html

## Build Methods

### via Browserify CLI interface

    browserify -r ./src/js/common.js -o ./dist/js/dist.common.js
    browserify -e ./src/js/main.js -x ./src/js/a.js -x ./src/js/common.js -o ./dist/js/dist.main.js
    browserify -x ./src/js/b.js -x ./src/js/common.js -r ./src/js/a.js -o ./dist/js/dist.a.js
    browserify -x ./src/js/common.js -r ./src/js/b.js -o ./dist/js/dist.b.js


### Build via Grunt browserify

    grunt dist


### Build via Browserify API
    
    node ./grunt/tasks/bundle.js

