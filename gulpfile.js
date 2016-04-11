'use strict';

var gulp = require('gulp'),
    watch = require('gulp-watch'),
    prefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    rigger = require('gulp-rigger'),
    cssmin = require('gulp-clean-css'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    rimraf = require('rimraf'),
    browserSync = require("browser-sync"),
    svgSprite = require('gulp-svg-sprites'),
    svgmin = require('gulp-svgmin'),
    cheerio = require('gulp-cheerio'),
    /*sprite = require('css-sprite').stream,*/
    gulpif = require('gulp-if'),
    replace = require('gulp-replace'),
    plumber = require('gulp-plumber'),
    uncss = require("gulp-uncss"),
    reload = browserSync.reload;

var path = {
    build: {
        html: 'build/',
        js: 'build/js/',
        css: 'build/css/',
        img: 'build/img/',
        fonts: 'build/fonts/',
        spritesSvg: 'build/img/svg/'
    },
    src: {
        html: 'src/*.html',
        js: 'src/js/main.js',
        style: 'src/style/main.scss',
        img: 'src/img/**/*.*',
        fonts: 'src/fonts/**/*.*',
        spritesSvg: 'src/img/svg/*.svg'
    },
    watch: {
        html: 'src/**/*.html',
        js: 'src/js/**/*.js',
        style: 'src/style/**/*.scss',
        img: 'src/img/**/*.*',
        spritesSvg: 'src/img/svg/*.svg',
        fonts: 'src/fonts/**/*.*'
    },
    clean: './build'
};

var config = {
    server: {
        baseDir: "./build"
    },
    /*tunnel: true,*/
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



// generate sprite.png and _sprite.scss 
gulp.task('sprites', function () {
  return gulp.src(path.src.img)
    .pipe(sprite({
      name: 'sprite',
      style: '_sprite.scss',
      cssPath: './img',
      processor: 'scss'
    }))
    .pipe(gulpif('*.png', gulp.dest('./dist/img/'), gulp.dest('./dist/scss/')))
});



/**************************
svg sprites building start
**************************/
gulp.task('svgSpriteBuild', function () {
    return gulp.src(path.src.spritesSvg)
        // minify svg
        .pipe(svgmin({
            js2svg: {
                pretty: true
            }
        }))
        // remove all fill and style declarations in out shapes
        .pipe(cheerio({
            run: function ($) {
                $('[fill]').removeAttr('fill');
                $('[style]').removeAttr('style');
            },
            parserOptions: { xmlMode: true }
        }))
        // cheerio plugin create unnecessary string '>', so replace it.
        .pipe(replace('&gt;', '>'))
        // build svg sprite
        .pipe(svgSprite({
                mode: "symbols",
                preview: false,
                selector: "icon-%f",
                svg: {
                    symbols: 'symbol_sprite.html'
                }
            }
        ))
        .pipe(gulp.dest('src/img/i/'));
});

// create sass file for our sprite
gulp.task('svgSpriteSass', function () {
    return gulp.src(path.src.spritesSvg)
        .pipe(svgSprite({
                preview: false,
                selector: "icon-%f",
                svg: {
                    sprite: 'svg_sprite.html'
                },
                cssFile: '../_svg_sprite.scss',
                templates: {
                    css: require("fs").readFileSync('src/style/partials/_sprite-template.scss', "utf-8")
                }
            }
        ))
        .pipe(gulp.dest('src/img/i/'));
});

gulp.task('redir', function () {
    gulp.src('src/img/i/') 
        .pipe(gulp.dest('src/img/i/'))
        .pipe(reload({stream: true}));
});


gulp.task('html:build', function () {
    gulp.src(path.src.html) 
        .pipe(rigger())
        .pipe(gulp.dest(path.build.html))
        .pipe(reload({stream: true}));
});

gulp.task('js:build', function () {
    gulp.src(path.src.js) 
        .pipe(rigger()) 
/*        .pipe(sourcemaps.init()) */
        .pipe(uglify()) 
        /*.pipe(sourcemaps.write()) */
        .pipe(gulp.dest(path.build.js))
        .pipe(reload({stream: true}));
});

gulp.task('style:build', function () {
    gulp.src(path.src.style) 
        /*.pipe(plumber())*/
        /*.pipe(sourcemaps.init())*/
        .pipe(sass({
            includePaths: ['src/style/'],
            outputStyle: 'compressed',
            sourceMap: false,
            errLogToConsole: true
        }))
        .pipe(prefixer({ browsers: ['last 4 versions'] }))
        .pipe(cssmin({keepSpecialComments : 0}))
        /*.pipe(sourcemaps.write())*/
        .pipe(gulp.dest(path.build.css))
        .pipe(reload({stream: true}));
});

gulp.task('image:build', function () {
    gulp.src(path.src.img) 
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()],
            interlaced: true
        }))
        .pipe(gulp.dest(path.build.img))
        .pipe(reload({stream: true}));
});

gulp.task('fonts:build', function() {
    gulp.src(path.src.fonts)
        .pipe(gulp.dest(path.build.fonts))
});

gulp.task('build', [
    'html:build',
    'js:build',
    'style:build',
    'fonts:build',
    'image:build',
    'svgSpriteBuild',
    'svgSpriteSass'
]);


gulp.task('watch', function(){
    watch([path.watch.html], function(event, cb) {
        gulp.start('html:build');
    });
    watch([path.watch.style], function(event, cb) {
        gulp.start('style:build');
    });
    watch([path.watch.js], function(event, cb) {
        gulp.start('js:build');
    });
    watch([path.watch.img], function(event, cb) {
        gulp.start('image:build');
    });
    watch([path.watch.fonts], function(event, cb) {
        gulp.start('fonts:build');
    });
});


gulp.task('default', ['build', 'watch', 'webserver']);