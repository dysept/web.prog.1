const { series, src, dest, parallel, watch, task } = require('gulp');
//const sass = require('gulp-sass');
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const cssnano = require('gulp-cssnano');
const imagemin = require('gulp-imagemin');
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');

/*import gulpT from "gulp"
import browserSync from'browser-sync';
  import sass from 'gulp-sass';
  import concat from 'gulp-concat';
  import uglify from 'gulp-uglify';
  import rename from 'gulp-rename';
  import cssnano from 'gulp-cssnano';
  import imagemin from 'gulp-imagemin';
  import open from 'gulp-open';*/

/*const html_task = () => src('app/*.html')////
    .pipe(dest('dist'));

exports.html_task = html_task;

function scss() {
    return gulp.src('app/scss/index.scss')  // Update the path if needed
      .pipe(concat('styles.scss'))
      .pipe(sass().on('error', sass.logError))
      .pipe(autoprefixer({
        overrideBrowserslist: ['last 2 versions'],
        cascade: false
      }))
      .pipe(cssnano())
      .pipe(rename({suffix: '.min'}))
      .pipe(gulp.dest('dist/css'))
      .pipe(browserSync.stream());
  }
  

const scripts_task = () => src('app/js/*.js')
    .pipe(concat('index.js'))
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(dest('dist/js'));
    //.pipe(browserSync.stream());


const images_task = () => src('app/img/*.+(jpg|jpeg|gif|png)')
    .pipe(imagemin({
        progressive: true,
        svgoPlugins: [{ removeViewBox: false }],
        interlaced: true
    }))
    .pipe(dest('dist/img'));


function lib_css() {
        return src('app/lib/css/*.css')
          .pipe(dest('dist/css'));
      }
      
function lib_js() {
        return src('app/lib/js/*.js')
          .pipe(dest('dist/js'));
      }

      function browsersync() {
        browserSync.init({
            server: {
                baseDir: './dist'
            }
        });
      }
      
  const watch_task = () => {
        watch('app/*.html', parallel(html_task));
        watch('app/scss/*.scss', parallel(scss_task));
        watch('app/js/*.js', parallel(scripts_task));
  } 
 const startSeries = async () => {
        await series(html_task, scss_task, scripts_task, images_task, watch_task)
    }
    
    task('open',html_task );
    task('all', startSeries);
    task('watch', watch_task);*/


    function html_task()  {
        return src ('app/*.html')
         .pipe(dest('dist'));
            //.pipe(browserSync.stream());
    }

function scss ()
{
   return src ('app/scss/*.scss') // Update the path if needed
    .pipe(concat('index.scss'))
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      overrideBrowserslist: ['last 2 versions'],
      cascade: false
    }))
    .pipe(cssnano())
   //.pipe(rename({ suffix: '.min' }))
    .pipe(dest('dist/css'))
    .pipe(browserSync.stream());
}

const scripts_task = () => src('app/js/*.js')
  .pipe(concat('index.js'))
  .pipe(uglify())
  .pipe(rename({ suffix: '.min' }))
  .pipe(dest('dist/js'));
  //.pipe(browserSync.stream());

const images_task = () => src('app/img/*.+(jpg|jpeg|gif|png)')
  .pipe(imagemin({
    progressive: true,
    svgoPlugins: [{ removeViewBox: false }],
    interlaced: true
  }))
  .pipe(dest('dist/img'));

function lib_css() {
  return src('app/lib/css/*.css')
    .pipe(dest('dist/css'));
}

function lib_js() {
  return src('app/lib/js/*.js')
    .pipe(dest('dist/js'));
}

function data_task() {
  return src('app/data/*.json')
    .pipe(dest('dist/data'));
}

function browsersync() {
  browserSync.init({
    server: {
      baseDir: './dist'
    }
  });
}

const watch_task = () => {
  watch('app/*.html', parallel(html_task));
  watch('app/scss/*.scss', parallel(scss));
  watch('app/js/*.min.js', parallel(scripts_task));

};

const startSeries = async () => {
  await series(html_task, scss, scripts_task, images_task,data_task, watch_task);
};

const openSeries = async () => {
    await series(html_task, scss);
  };

task('open', openSeries);
task('all', series(html_task, scss, scripts_task, images_task,data_task, watch_task));
task('watch', watch_task);
task('html', html_task);
task('scss', scss);