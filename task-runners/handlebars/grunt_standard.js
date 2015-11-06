module.exports = function(grunt) {
	'use strict';

	require('time-grunt')(grunt);

	grunt.initConfig({

		// Package Info
		pkg: grunt.file.readJSON('package.json'),

		// Grunt Clean
		// Clear files and folders that are auto generated
		// https://github.com/gruntjs/grunt-contrib-clean
		clean: {
			dist: {
				files: [{
					src: [
						'<%= pkg.directory.dest %>/*'
					]
				}],
				options:{
					force: true // enables deletion fo folders outside of working directory
				}
			}
		},

		// Grunt Copy
		// Copies files and folders
		// https://github.com/gruntjs/grunt-contrib-copy
		copy: {
			dev: {
				files: [{
					expand: true,
					cwd: '<%= pkg.directory.app %>',
					dest: '<%= pkg.directory.dest %>',
					src: [
						'assets/**/*',
						'!assets/js/*'
					]
				}]
			},
			dist: {
				files: [{
					expand: true,
					cwd: '<%= pkg.directory.app %>',
					dest: '<%= pkg.directory.dest %>',
					src: [
						'assets/imgs/**/*',
						'assets/ajax/**/*',
						'assets/js/lib/*',
						'assets/videos/**/*'
					]
				}]
			}
		},

		// Compass
		// Generates the CSS from SCSS files
		// https://github.com/gruntjs/grunt-contrib-compass
		compass: {
			dev: {
				options: {
					sassDir: '<%= pkg.directory.app %>/scss',
					cssDir: '<%= pkg.directory.dest %>/assets/css',
					imagesDir: '<%= pkg.directory.dest %>/assets/images',
					javascriptDir: '<%= pkg.directory.dest %>/assets/js',
					fontsDir: '<%= pkg.directory.dest %>/assets/fonts',
					relativeAssets: false,
					outputStyle: 'expanded'
				}
			},
			css: {
				options: {
					sassDir: '<%= pkg.directory.app %>/scss',
					cssDir: '<%= pkg.directory.dest %>/assets/css',
					outputStyle: 'compressed',
					noLineComments: true
				}
			},
			dist: {
				options: {
					sassDir: '<%= pkg.directory.app %>/scss',
					cssDir: '<%= pkg.directory.dest %>/assets/css',
					imagesDir: '<%= pkg.directory.dest %>/assets/images',
					javascriptDir: '<%= pkg.directory.dest %>/assets/js',
					fontsDir: '<%= pkg.directory.dest %>/assets/fonts',
					relativeAssets: false,
					outputStyle: 'compressed'
				}
			}
		},

		imagemin: {
			default: {
				files: [{
					expand: true,
					cwd: '<%= pkg.directory.app %>/assets/images',
					src: ['**/*.{png,jpg,gif,svg}'],
					dest: '<%= pkg.directory.dest %>/assets/images'
				}]
			}
		},

		// Assemble
		// Static site generator for Node.js, Grunt.js, and Yeoman.
		// https://github.com/assemble/assemble
		assemble: {
			dev: {
				options: {
					assets: '<%= pkg.directory.dest %>',
					layout: ['<%= pkg.paths.page.layout %>'],
					data: ['<%= pkg.paths.page.data %>'],
					production: false,
					pages: ['<%= pkg.paths.page.pages %>']
				},
				files: [{
					expand: true,
					src: ['**/*.hbs'],
					cwd: '<%= pkg.directory.app %>/views/pages/',
					dest: '<%= pkg.directory.dest %>'
				}]
			},
			dist: {
				options: {
					assets: '<%= pkg.directory.dest %>',
					layout: ['<%= pkg.paths.page.layout %>'],
					data: ['<%= pkg.paths.page.data %>'],
					production: true,
					pages: ['<%= pkg.paths.page.pages %>']
				},
				files: [{
					expand: true,
					src: ['**/*.hbs'],
					cwd: '<%= pkg.directory.app %>/views/pages/',
					dest: '<%= pkg.directory.dest %>'
				}]
			}
		},

		// Concat
		// https://github.com/gruntjs/grunt-contrib-concat
		concat: {
			dist: {
				src: ['<%= pkg.paths.page.js %>'],
				dest: '<%= pkg.directory.dest %>/assets/js/main.js',
			},
		},

		// Uglify
		// https://github.com/gruntjs/grunt-contrib-uglify
		uglify: {
			dist: {
				files: {
					'<%= pkg.directory.dest %>/assets/js/main.js': ['<%= pkg.directory.dest %>/assets/js/main.js']
				}
			}
		},

		// Watch
		// Watches for changes to specific files
		// https://github.com/gruntjs/grunt-contrib-watch
		watch: {
			js: {
				files: ['<%= pkg.paths.page.js %>','<%= pkg.paths.page.js %>'],
				tasks: ['copy:dev','concat:dist'],
				options: {
					livereload: true
				}
			},
			html: {
				files: ['<%= pkg.paths.page.partials %>','<%= pkg.paths.page.partials %>','<%= pkg.paths.page.pages %>'],
				tasks: ['assemble:dev'],
				options: {
					livereload: true
				}
			},
			styles: {
				files: ['<%= pkg.paths.page.scss %>/**/*.scss','<%= pkg.paths.page.scss %>/**/*.scss'],
				tasks: ['compass:dev'],
				options: {
					livereload: true
				}
			},
			json: {
				files: ['<%= pkg.paths.page.data %>','<%= pkg.paths.page.ajax %>'],
				tasks: ['copy:dev','assemble:dev'],
				options: {
					livereload: true
				}
			},
			images: {
				files: ['<%= pkg.directory.app %>/assets/images/**/*.{png,jpg,gif,svg}'],
				tasks: ['copy:dev','imagemin:default'],
				options: {
					liverelead: true
				}
			}
		},

		// Concurrent
		// Allow multiple tasks to occur at once.  Using this technique because it gives us flexibility in the future to add other tasks such as CONNECT.
		// https://github.com/sindresorhus/grunt-concurrent
		concurrent: {
			dev: ['watch'],
			options: {
				logConcurrentOutput: true
			}
		}

	});

	require('load-grunt-tasks')(grunt,{
		pattern: ['grunt-*', 'assemble']
	});
	// Development grunt task
	grunt.registerTask('default', [
		// Cleanup Previously Generated Files
		'clean:dist',

		// Sass compilation with no minification
		'compass:dev',

		// Copy HTML and assets
		'copy:dev',

		// concatenates javascript files into main.js
		// to minify, run grunt minify
		'concat:dist',

		// Assemble the HTML files
		'assemble:dev',

		// Runs WATCH
		'concurrent:dev'
	]);
	//Production grunt task
	grunt.registerTask('build', [
		'clean:dist',
		'compass:css',
		'concat:dist',
		'uglify:dist',
		'copy:dist',
		'assemble:dist'
	]);

};
