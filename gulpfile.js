
// gulpfile.js
/*const { gulpT.series, gulpT.src, gulpT.dest, parallel, watch,task } = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const cssnano = require('gulp-cssnano');
const imagemin = require('gulp-imagemin');*/
import gulpT from "gulp"

  import sass from 'gulp-sass';
  import concat from 'gulp-concat';
  import uglify from 'gulp-uglify';
  import rename from 'gulp-rename';
  import cssnano from 'gulp-cssnano';
  import imagemin from 'gulp-imagemin';
  import open from 'gulp-open';
const html_task = () => gulpT.src('app/*.html')
    .pipe(gulpT.dest('dist'));
const scss_task = () => gulpT.src('app/scss/*.scss')
    .pipe(concat('index.scss'))
    .pipe(sass())
    .pipe(cssnano())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulpT.dest('dist/css'));

const scripts_task = () => gulpT.src('app/js/*.js')
    .pipe(concat('index.js'))
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulpT.dest('dist/js'));

const images_task = () => gulpT.src('app/img/*.+(jpg|jpeg|gif|png)')
    .pipe(imagemin({
        progressive: true,
        svgoPlugins: [{ removeViewBox: false }],
        interlaced: true
    }))
    .pipe(gulpT.dest('dist/img'));


function lib_css() {
        return gulpT.src('app/lib/css/*.css')
          .pipe(gulpT.dest('dist/css'));
      }
      
function lib_js() {
        return gulpT.src('app/lib/js/*.js')
          .pipe(gulpT.dest('dist/js'));
      }
  const watch_task = () => {
        gulpT.watch('app/*.html', gulpT.parallel(html_task));
        gulpT.watch('app/scss/*.scss', gulpT.parallel(scss_task));
        gulpT.watch('app/js/*.js', gulpT.parallel(scripts_task));
    }     
 const startSeries = async () => {
        await gulpT.series(html_task, scss_task, scripts_task, images_task, watch_task)
    }
    
    gulpT.task('open',html_task );
    gulpT.task('all', startSeries);
    gulpT.task('watch', watch_task);