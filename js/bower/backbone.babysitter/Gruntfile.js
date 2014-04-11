/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    meta: {
      version: '<%= pkg.version %>',
      banner: 
        '// Backbone.BabySitter\n' +
        '// -------------------\n' + 
        '// v<%= pkg.version %>\n' +
        '//\n' + 
        '// Copyright (c)<%= grunt.template.today("yyyy") %> Derick Bailey, Muted Solutions, LLC.\n' +
        '// Distributed under MIT license\n' +
        '//\n' + 
        '// http://github.com/marionettejs/backbone.babysitter\n' +
        '\n'
    },

    lint: {
      files: ['src/*.js']
    },

    preprocess: {
      core_build: {
        files: {
          'lib/backbone.babysitter.js' : 'src/childviewcontainer.js'
        }
      },
      core_amd: {
        files: {
          'lib/amd/backbone.babysitter.js' : 'src/amd.js'
        }
      },
    },

    concat: {
      options: {
        banner: "<%= meta.banner %>"
      },
      core: {
        src: 'lib/backbone.babysitter.js',
        dest: 'lib/backbone.babysitter.js'
      },
      amd: {
        src: 'lib/amd/backbone.babysitter.js',
        dest: 'lib/amd/backbone.babysitter.js'
      }
    },

    uglify : {
      options: {
        banner: "<%= meta.banner %>"
      },
      amd : {
        src : 'lib/amd/backbone.babysitter.js',
        dest : 'lib/amd/backbone.babysitter.min.js',
      },
      core : {
        src : 'lib/backbone.babysitter.js',
        dest : 'lib/backbone.babysitter.min.js',
        options : {
          sourceMap : 'lib/backbone.babysitter.map',
          sourceMappingURL : 'backbone.babysitter.map',
          sourceMapPrefix : 2,
        }
      }
    },

    jasmine : {
      options : {
        helpers : 'spec/javascripts/helpers/*.js',
        specs : 'spec/javascripts/**/*.spec.js',
        vendor : [
          'public/javascripts/jquery.js',
          'public/javascripts/json2.js',
          'public/javascripts/underscore.js',
          'public/javascripts/backbone.js'
        ],
      },
      coverage : {
        src : '<%= jasmine.babysitter.src %>',
        options : {
          template : require('grunt-template-jasmine-istanbul'),
          templateOptions: {
            coverage: 'reports/coverage.json',
            report: 'reports/coverage'
          }
        }
      },
      babysitter : {
        src : ['src/*.js'],
      }
    },

    jshint: {
      options: {
        jshintrc : '.jshintrc'
      },
      babysitter : [ 'src/*.js' ]
    },
    plato: {
      babysitter : {
        src : 'src/*.js',
        dest : 'reports',
        options : {
          jshint : grunt.file.readJSON('.jshintrc')
        }
      }
    },
    watch: {
      babysitter : {
        files : ['src/*.js', 'spec/**/*.js'],
        tasks : ['jshint', 'jasmine:babysitter']
      },
      server : {
        files : ['src/*.js', 'spec/**/*.js'],
        tasks : ['jasmine:babysitter:build']
      }
    },

    connect: {
      server: {
        options: {
          port: 8888
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-preprocess');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-plato');

  grunt.registerTask('test', ['jshint', 'jasmine:babysitter']);

  grunt.registerTask('dev', ['test', 'watch:babysitter']);

  grunt.registerTask('server', ['jasmine:babysitter:build', 'connect:server', 'watch:server']);

  // Default task.
  grunt.registerTask('default', ['jshint', 'jasmine:coverage', 'preprocess', 'concat', 'uglify']);

};
