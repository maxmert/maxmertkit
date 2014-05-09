/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    meta: {
      version: '<%= pkg.version %>',
      banner: 
        '// Backbone.Wreqr (Backbone.Marionette)\n' +
        '// ----------------------------------\n' + 
        '// v<%= pkg.version %>\n' +
        '//\n' + 
        '// Copyright (c)<%= grunt.template.today("yyyy") %> Derick Bailey, Muted Solutions, LLC.\n' +
        '// Distributed under MIT license\n' +
        '//\n' + 
        '// http://github.com/marionettejs/backbone.wreqr\n' +
        '\n\n'
    },

    lint: {
      files: ['src/wreqr*.js']
    },

    preprocess: {
      core_build: {
        files: {
          'lib/backbone.wreqr.js' : 'src/wreqr.js'
        }
      },
      core_amd: {
        files: {
          'lib/amd/backbone.wreqr.js' : 'src/amd.js'
        }
      },
    },

    concat: {
      options: {
        banner: "<%= meta.banner %>"
      },
      build: {
        src: 'lib/backbone.wreqr.js',
        dest: 'lib/backbone.wreqr.js'
      }
    },

    uglify : {
      options: {
        banner: "<%= meta.banner %>"
      },
      amd : {
        src : 'lib/amd/backbone.wreqr.js',
        dest : 'lib/amd/backbone.wreqr.min.js'
      },
      core : {
        src : 'lib/backbone.wreqr.js',
        dest : 'lib/backbone.wreqr.min.js',
        options : {
          sourceMap : 'lib/backbone.wreqr.map',
          sourceMappingURL : 'backbone.wreqr.map',
          sourceMapPrefix : 2
        }
      }
    },

    jasmine : {
      options : {
        helpers : 'spec/javascripts/helpers/*.js',
        specs : 'spec/javascripts/**/*.spec.js',
        vendor : [
          'public/javascripts/json2.js',
          'public/javascripts/jquery.js',
          'public/javascripts/underscore.js',
          'public/javascripts/backbone.js'
        ],
      },
      coverage : {
        src : '<%= jasmine.wreqr.src %>',
        options : {
          template : require('grunt-template-jasmine-istanbul'),
          templateOptions: {
            coverage: 'reports/coverage.json',
            report: 'reports/coverage'
          }
        }
      },
      wreqr: {
        src : [
          'src/wreqr.js',
          'spec/javascripts/support/wreqrHelper.js',
          'src/wreqr.handlers.js',
          'src/wreqr.*.js'
        ],
      }
    },

    jshint: {
      options: {
        jshintrc : '.jshintrc'
      },
      wreqr : [ 'src/*.js' ]
    },
    plato: {
      wreqr : {
        src : 'src/*.js',
        dest : 'reports',
        options : {
          jshint : grunt.file.readJSON('.jshintrc')
        }
      }
    },
    watch: {
      wreqr : {
        files : ['src/*.js', 'spec/**/*.js'],
        tasks : ['jshint', 'jasmine:wreqr']
      },
      server : {
        files : ['src/*.js', 'spec/**/*.js'],
        tasks : ['jasmine:wreqr:build']
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

  grunt.registerTask('test', ['jshint', 'jasmine:wreqr']);

  grunt.registerTask('dev', ['test', 'watch:wreqr']);

  grunt.registerTask('server', ['jasmine:wreqr:build', 'connect:server', 'watch:server']);

  // Default task.
  grunt.registerTask('default', ['jshint', 'jasmine:coverage', 'preprocess', 'concat', 'uglify']);

};
