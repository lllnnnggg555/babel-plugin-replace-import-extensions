const path = require('path')
const gulp = require('gulp')
const fs = require('fs-extra')
const babel = require('gulp-babel')

function removeDir (dir) {
  return function (cb) {
    fs.removeSync(path.resolve(__dirname, `./${dir}`))
    cb()
  }
}

function copyFileTo (dir) {
  return function (cb) {
    gulp.src(path.resolve(__dirname, './src/**/*.!(js|jsx|ts|tsx)'))
      .pipe(gulp.dest(path.resolve(__dirname, `./${dir}`)))
    cb()
  }
}

function build (dir) {
  return function (cb) {
    gulp.src(path.resolve(__dirname, './src/**/*.?(js|jsx|ts|tsx)'))
      .pipe(babel())
      .pipe(gulp.dest(path.resolve(__dirname, `./${dir}`)))
    cb()
  }
}

const buildLib = gulp.series(removeDir('lib'), copyFileTo('lib'), build('lib'))

gulp.task('lib', buildLib)

gulp.task('default', buildLib)
