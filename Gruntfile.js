module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        copy: {
            main: {
                files: {
                    "out/": ["desktop.bundles/index/*"]
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');

}
