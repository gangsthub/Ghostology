/*global module:false*/
module.exports = function(grunt) {
  'use strict';

  // Project configuration.
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    // Metadata.
    //    banner:
    //      '/*\n'+
    //      '   <%= pkg.title || pkg.name %>' + '\'s '+' Fork' + '- v<%= pkg.version %>\n' +
    //      '   MIT License <%= grunt.template.today("yyyy-mm-dd, h:MM:ss TT") %>\n' +
    //      '   <%= pkg.homepage %>\n' +
    //      '*/\n',

    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'assets/css/',
          src: ['assets/css/*.css', 'assets/css/!*.min.css'],
          dest: 'assets/css/css',
          ext: '.min.css'
        }]
      },
    }

  });

  // Load
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Commands
  grunt.registerTask('default', ['cssmin']);

};