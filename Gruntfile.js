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

  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.registerTask('default', ['clean', 'copy']);

};
