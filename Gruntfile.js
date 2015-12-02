var path = require('path');
var exec = require('child_process').exec;
var spawn = require('child_process').spawn;

module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    // transpile ES6
    babel: {
      options: {
        sourceMap: 'inline',
        blacklist: 'regenerator',
        stage: 1,
        optional: ['asyncToGenerator']
      },
      dist: {
        files: [{
          expand: true,
          cwd: 'src/',
          src: ['**/*.js'],
          dest: 'build/',
        }]
      }
    },

    // rebuild on file changes
    watchChokidar: {
      options: {
        spawn: true
      },
      livereload: {
        options: {livereload: true},
        files: ['build/**/*']
      },
      js: {
        files: ['src/**/*.js'],
        tasks: ['newer:babel']
      }
    }
  });

  grunt.registerTask('run-debugger', function(){
    console.log('INSIDE DEBUG TASK');
    exec('iron-node ./build/index.js', function(error, stdout, stderr){
      if(error){
        console.error(error);
      }
    }).unref();
  });

  grunt.registerTask('build', ['newer:babel']);
  grunt.registerTask('debug', ['build', 'run-debugger', 'watchChokidar', ]);
};
