module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options:{
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build:{
                files:[{
                    expand:true,
                    cwd: 'src/',
                    src: '*.js',
                    dest: 'dist/'
                }]
            }
        },
        clean:['dist/'],
        jshint:{
            all:['src/*.js']
        },
        jasmine:{
            src: 'src/**/*.js',
            options:{
                specs: 'spec/**/*.js'
            }
        },
        watch:{
            specs:{
                files:'spec/**/*.js',
                tasks: ['jasmine'],
                options:{
                    spawn:false
                }
            }
        }
    });
    
    // Load the plugin that provides the tasks
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default tasks(s).
    grunt.registerTask('default',['jshint','clean','uglify']);
    //grunt.registerTask('watch',['jasmine']);
};
