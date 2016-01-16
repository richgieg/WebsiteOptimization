module.exports = function(grunt) {

  grunt.initConfig({

    // Clear out the dist directory if it exists
    clean: {
      main: {
        src: ['dist'],
      },
    },

    // Copy src files to dist directory (CSS, JavaScript)
    copy: {
      main: {
        expand: true,
        cwd: 'src',
        src: '**/*.{css,js}',
        dest: 'dist',
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
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.registerTask('default', [
    'clean', 'copy', 'htmlmin', 'responsive_images']);

};
