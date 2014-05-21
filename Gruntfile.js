module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        copy: {
            blocks: {
                files: {
                    "out/": ["desktop.blocks/**/*"]
                }
            },
            bundles: {
                files: {
                    "out/": ["desktop.bundles/index/*"]
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');

}
