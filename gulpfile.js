const { src, dest, watch, series } = require('gulp');

// CSS and SASS
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const postcss = require('gulp-postcss');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');

// JS
const terser = require('gulp-terser-js');

function buildStyles() {
    return src('src/scss/app.scss')
			.pipe(sourcemaps.init())
        	.pipe(sass().on('error', sass.logError))
        	.pipe(postcss([autoprefixer(),cssnano()]))
			.pipe(sourcemaps.write('.'))
        	.pipe(dest('public/css'))
};

function buildScripts(){
    return src('src/js/app.js')
        	.pipe(sourcemaps.init())
        	.pipe(terser())
        	.pipe(sourcemaps.write('.'))
        	.pipe(dest('public/js'));
}

function images(){
    return src('src/assets/**/*')
            .pipe(dest('public/assets'))
}

function dev() {
    watch('src/scss/**/*.scss', buildStyles);
	watch('src/js/app.js', buildScripts);
    watch('src/assets/**/*', images);
};

exports.buildStyles = buildStyles;
exports.buildScripts = buildScripts;
exports.images = images;
exports.dev = dev;

exports.default = series(images, buildStyles, buildScripts, dev);