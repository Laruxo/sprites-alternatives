module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({
        compass: {
            build: {
                options: {
                    sassDir: 'resources/sass',
                    sassPath: 'resources/sass',
                    cssDir: 'public/css',
                    cssPath: 'public/css',
                    imagesDir: 'resources',
                    imagesPath: 'resources',
                    generatedImagesDir: 'public/sprites',
                    generatedImagesPath: 'public/sprites',
                    httpGeneratedImagesPath: '/sprites',
                    environment: 'development',
                    outputStyle: 'compressed'
                }
            }
        },

        pngmin: {
            build: {
                options: {
                    ext: '.png',
                    force: true
                },
                files: [
                    {
                        expand: true,
                        src: 'public/sprites/*.png',
                        cwd: '/',
                        dest: '/'
                    }
                ]
            }
        },
        clean: {
            build: [
                'public/css/*.css',
                'public/sprites/*.png'
            ]
        }
    });

    // Load the plugins
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-pngmin');
    //#################### BEGIN TASKS REGISTER ####################

    grunt.registerTask('default', ['clean', 'compass', 'pngmin']);

    //#################### END TASKS REGISTER ####################

    // Watcher
    grunt.event.on('watch', function (action, filepath, target) {
        grunt.log.writeln(target + ': ' + filepath + ' has ' + action);
    });
};
