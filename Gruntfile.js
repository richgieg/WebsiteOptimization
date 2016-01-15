module.exports = function(grunt) {

  grunt.initConfig({

    // Clear out the dist directory if it exists
    clean: {
      main: {
        src: ['dist'],
      },
    },

    // Copy src files to dist directory
    copy: {
      main: {
        expand: true,
        cwd: 'src',
        src: '**/*',
        dest: 'dist',
      },
    },

    // Ensure that the max image width is 720px and compress images
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
  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.registerTask('default', ['clean', 'responsive_images']);

};
