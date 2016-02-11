module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({
        clean: {
            build: [
                'public/sprites/*',
                'public/svg/*'
            ]
        },

        // Sprites ----------
        compass: {
            build: {
                options: {
                    sassDir: 'resources/sass',
                    sassPath: 'resources/sass',
                    cssDir: 'public/sprites',
                    cssPath: 'public/sprites',
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

        // SVG ----------
        svg_sprite: {
            build: {
                options: {
                    mode: {
                        css: {
                            dest: "css",
                            render: {
                                css: true
                            }
                        },
                        symbol: {
                            dest: "symbol",
                            render: {
                                css: true
                            }
                        }
                    }
                },
                src: ['resources/svg/*.svg'],
                dest: 'public/svg'
            }
        },

        // Fonts ----------
        webfont: {
            build: {
                src: 'resources/svg/*.svg',
                dest: 'public/fonts',
                options: {
                    htmlDemo: false
                }
            }
        }
    });

    // Load the plugins
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-pngmin');
    grunt.loadNpmTasks('grunt-svg-sprite');
    grunt.loadNpmTasks('grunt-webfont');

    // Register tasks
    grunt.registerTask('default', ['clean', 'compass', 'pngmin', 'svg_sprite', 'webfont']);
};
