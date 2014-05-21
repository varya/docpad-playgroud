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
            },
            data: {
                files: {
                    "out/": ["data/*"]
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');

}
