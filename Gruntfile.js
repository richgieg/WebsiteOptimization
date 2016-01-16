/*
*   Module:   Gruntfile.js
*   Author:   Richard Gieg
*
*   This file contains Grunt task definitions that optimize the website's
*   source code and images. Whenever the source code or images are modified,
*   or if you haven't built the site for the first time yet, these jobs must
*   be executed by running 'grunt' in the terminal.
*
*/

module.exports = function(grunt) {

  grunt.initConfig({

    // Clear out the dist directory if it exists
    clean: {
      main: {
        src: ['dist'],
      },
    },

    // Minify HTML files, including inline JavaScript and CSS
    htmlmin: {
      main: {
        options: {
          minifyJS: true,
          minifyCSS: true,
          removeComments: true,
          collapseWhitespace: true
        },
        files: [{
          expand: true,
          cwd: 'src',
          src: '**/*.html',
          dest: 'dist',
        }]
      }
    },

    // Minify JavaScript files
    uglify: {
      main: {
        options: {
          sourceMap: false,
        },
        files: [{
          expand: true,
          cwd: 'src',
          src: '**/*.js',
          dest: 'dist',
        }]
      }
    },

    // Minify CSS files
    cssmin: {
      dist: {
        files: [{
          expand: true,
          cwd: 'src',
          src: '**/*.css',
          dest: 'dist',
        }]
      }
    },

    // Reduce image quality of src images to lower file size
    responsive_images: {
      main: {
        options: {
          engine: 'im',
          sizes: [{
            width: '100%',
            quality: 60,
            rename: false
          }]
        },
        files: [{
          expand: true,
          cwd: 'src',
          src: ['**/*.{gif,jpg,png}'],
          dest: 'dist'
        }]
      },
    },

  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.registerTask('default', [
    'clean', 'htmlmin', 'uglify', 'cssmin', 'responsive_images']);

};
