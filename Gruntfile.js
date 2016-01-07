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
        }
    });
    
    // Load the plugin that provides the tasks
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    // Default tasks(s).
    grunt.registerTask('default',['jshint','clean','uglify']);
};
