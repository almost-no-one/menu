'use strict';

var gulp = require('gulp'),
    watch = require('gulp-watch'),
    prefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    rigger = require('gulp-rigger'),
    cssmin = require('gulp-minify-css'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    rimraf = require('rimraf'),
    browserSync = require("browser-sync"),
		notify = require("gulp-notify"),
		install = require("gulp-install"),

    bower = require('gulp-bower'),
    reload = browserSync.reload;
 

var path = {
    build: {
        html: 'build/',
        js: 'build/js/',
        css: 'build/css/',
        img: 'build/img/',
        fonts: 'build/fonts/',
        template: 'build/template/',
        lan: 'build/lan/'
    },
    src: {
        html: 'src/*.html',
        js: 'src/js/*.js',
        style: 'src/css/*.scss',
        img: 'src/img/*.png', 
        fonts: 'src/fonts/**/*.*',
        template: 'src/template/**',
        lan: 'src/lan/**'
    },
    watch: {
        html: 'src/**/*.html',
        js: 'src/js/**/*.js',
        style: 'src/css/**/*.scss',
        img: 'src/img/*.*',   
        fonts: 'src/fonts/**/*.*',
        template: 'src/template/**',
        lan: 'src/lan/**'
    },
    clean: './build'
};

var config = {
    server: {
        baseDir: "./build"
    },
    tunnel: true,
    host: 'localhost',
    port: 9000,
    logPrefix: "Frontend_Devil"
};

gulp.task('webserver', function () {
    browserSync(config);
});

gulp.task('clean', function (cb) {
    rimraf(path.clean, cb);
});

gulp.task('html:build', function () {
    gulp.src(path.src.html) 
        .pipe(rigger())
        .pipe(gulp.dest(path.build.html))
        .pipe(reload({stream: true}));
});

gulp.task('lan:build', function () {
    gulp.src(path.src.lan) 
        .pipe(rigger())
        .pipe(gulp.dest(path.build.lan))
        .pipe(reload({stream: true}));
});

gulp.task('template:build', function () {
    gulp.src(path.src.template) 
        
        .pipe(gulp.dest(path.build.template))
        .pipe(reload({stream: true}));
});

gulp.task('js:build', function () {
    gulp.src(path.src.js) 
        .pipe(rigger()) 
        .pipe(sourcemaps.init()) 
        .pipe(uglify()) 
        .pipe(sourcemaps.write()) 
        .pipe(gulp.dest(path.build.js))
        .pipe(reload({stream: true}));
});

gulp.task('style:build', function () {
    gulp.src(path.src.style) 
        .pipe(rigger())
        .pipe(sourcemaps.init())
        .pipe(sass({
            sourceMap: true,
            errLogToConsole: false
        }))
        .on('error', function(err) {
            notify().write(err);
            this.emit('end');
        })
        .pipe(prefixer())
   //     .pipe(cssmin())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.build.css))
       .pipe(reload({stream: true}));
 });

gulp.task('image:build', function () {
    gulp.src(path.src.img) 
       //.pipe(imagemin({
       //    progressive: true,
       //    svgoPlugins: [{removeViewBox: false}],
       //    use: [pngquant()],
       //    interlaced: true
       //}))
        .pipe(gulp.dest(path.build.img))
        .pipe(reload({stream: true}));

});

gulp.task('fonts:build', function() {
    gulp.src(path.src.fonts)
        .pipe(gulp.dest(path.build.fonts))
});

gulp.task('donestyle', function() {
        gulp.src('src/style/style.scss')
        .pipe(notify("Стили обновлены"));
    
});

gulp.task('npm-install', function() {
       gulp.src([  './package.json'])
  .pipe(install());
    
});

gulp.task('build', [ 
    'html:build',
    'js:build',
    'style:build',
    'fonts:build',
    'image:build'
]);


gulp.task('watch', function(){
    watch([path.watch.html], function(event, cb) {
        gulp.start('html:build');
    });
    watch([path.watch.template], function(event, cb) {
        gulp.start('html:build');
    });
    watch([path.watch.lan], function(event, cb) {
        gulp.start('lan:build');
    });
    watch([path.watch.style], function(event, cb) {
        gulp.start('style:build');
            //    gulp.start('donestyle');
    });
    watch([path.watch.js], function(event, cb) {
        gulp.start('js:build');
    });
    watch([path.watch.img], function(event, cb) {
       gulp.start('image:build')
     });
    watch([path.watch.fonts], function(event, cb) {
        gulp.start('fonts:build');
    });
});


gulp.task('default', ['build', 'webserver', 'watch']);

 