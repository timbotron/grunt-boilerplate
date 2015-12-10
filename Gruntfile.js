module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
     connect: {
       server: {
         options: {
           keepalive:true,
           port: 9001,
           base: 'www-root'
         }
       },
      }
  });
grunt.loadNpmTasks('grunt-contrib-connect');
};
