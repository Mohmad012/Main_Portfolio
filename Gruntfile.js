module.exports = function(grunt){
    grunt.initConfig({
        package: grunt.file.readJSON("package.json"),
        uglify:{
            t1:{
                files:[
                    {
                        src:[
                            'jsWork/functions.js',
                            'jsWork/dataOfPages.js',
                            'jsWork/allData.js',
                            'jsWork/main.js',
                            'jsWork/work.js',
                        ],
                        dest:'./assets/js/index.js'
                    }
                ]
            },
            t2:{
                options:{
                    // banner:"const b = 'this will be adding in the top of code page'"
                },
                files:[
                    {
                        // src:"jsWork/*.js",
                        // dest:'./assets/js/index.js'
                        // dest:'./assets/js/<%= package.version %>.js'
                        // and also
                        // dest:'./assets/js/<%= package.name %>.js'
                    }
                ]
            }
        },
        cssmin:{
            target:{
                files:[
                    {
                        src:"cssWork/main.css",
                        dest:"./assets/css/main.css"
                    }
                ]
            }
        },
        htmlmin:{
            options:{
                collapseWhitespace:true
            },
            target:{
                files:[
                    {
                        src:"htmlWork/index.html",
                        dest:"index.html"
                    },
                    {
                        src:"htmlWork/about.html",
                        dest:"about.html"
                    },
                    {
                        src:"htmlWork/contact.html",
                        dest:"contact.html"
                    },
                    {
                        src:"htmlWork/work.html",
                        dest:"work.html"
                    }
                ]
            }
        },
        watch:{
            files:["jsWork/*.js" , "cssWork/*.css" ,"htmlWork/*.html"],
            tasks:["uglify" , "cssmin" , "htmlmin"],
            options:{
                livereload:true
            }
        },
        connect:{
            server:{
                options:{
                    port:8000,
                    base:{
                        path:"./",
                        options:{
                            index:"index.html"
                        }
                    }
                }
            }
        }
    })

    grunt.loadNpmTasks("grunt-contrib-uglify");

    grunt.loadNpmTasks("grunt-contrib-cssmin")

    grunt.loadNpmTasks("grunt-contrib-htmlmin")

    grunt.loadNpmTasks("grunt-contrib-watch")

    grunt.loadNpmTasks("grunt-contrib-connect")

    // use aliase
    // grunt.registerTask("compress" , "uglify"); // or add many of files
    grunt.registerTask("compress" , ["uglify" , "cssmin" , "htmlmin"]);
    // grunt.registerTask("default" , ["connect" , "watch"]); // only use (grunt) keyword to run the task
    grunt.registerTask("default" , ["watch"]);
    grunt.registerTask("compressT2" , "uglify:t2")
}