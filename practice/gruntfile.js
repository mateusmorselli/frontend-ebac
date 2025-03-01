module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            //transformar o nosso .less num .css
            development: {
                files: {
                    'dev/styles/main.css': 'src/styles/main.less'
                }
            },
            // minificar
            production: {
                options: {
                    compress: true,
                },

                files: {
                    'dist/styles/main.min.css': 'src/styles/main.less'
                }
            },            
        },
        // apos instalar o grnt-contrib-watch
        watch: {
            less: {
                files: ['src/styles/**/*.less'],
                tasks: ['less:development']
            },
            html: {
                files: ['src/index.html'],
                tasks: ['replace:dev']
            }
        },
        replace: {
            dev: {
                options: {
                    patterns: [
                        {
                            match: 'ENDERECO_DO_CSS',
                            replacement: './styles/main.css'
                        },
                        {
                            match: 'ENDERECO_DO_JS',
                            replacement: '../src/scripts/main.js'
                        },
                    ]
                },
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: ['src/index.html'],
                        dest: 'dev/'
                    }
                ]
            },
            dist: {
                options: {
                    patterns: [
                        {
                            match: 'ENDERECO_DO_CSS',
                            replacement: './styles/main.min.css'
                        },
                        {
                            match: 'ENDERECO_DO_JS',
                            replacement: './scripts/main.min.js'
                        },
                    ]
                },
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: ['prebuild/index.html'],
                        dest: 'dist/'
                    }
                ]
            }
        },
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true,
                },
                files: {
                    // 1 - minificacao
                    // 2 - subistituicao
                    'prebuild/index.html' : 'src/index.html'
                }
            }
        },
        clean: ['prebuild'],
        uglify: {
            target: {
                files: {
                    'dist/scripts/main.min.js' : 'src/scripts/main.js'
                }
            }
        },
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'src/images/', // Caminho para suas imagens
                    src: ['**/*.{png,jpg,gif}'], // Tipos de imagem a serem otimizados
                    dest: 'dist/images/' // Pasta onde as imagens otimizadas serão salvas
                }]
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-less'); //npm i --save-dev grunt-contrib-less
    grunt.loadNpmTasks('grunt-contrib-watch'); // npm i --save-dev grunt-contrib-watch
    grunt.loadNpmTasks('grunt-replace'); //npm install --save-dev grunt-replace
    grunt.loadNpmTasks('grunt-contrib-htmlmin'); //npm i --save-dev grunt-contrib-htmlmin 
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin')

    grunt.registerTask('default', ['watch']);
    grunt.registerTask('build', ['less:production', 'htmlmin:dist', 'replace:dist', 'clean', 'uglify', 'imagemin']);
};