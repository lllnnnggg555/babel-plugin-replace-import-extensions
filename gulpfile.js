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
    process.env.BABEL_ENV = dir
    gulp.src(path.resolve(__dirname, './src/**/*.?(js|jsx|ts|tsx)'))
      .pipe(babel())
      .pipe(gulp.dest(path.resolve(__dirname, `./${dir}`)))
    cb()
  }
}

const buildLib = gulp.series(removeDir('lib'), copyFileTo('lib'), build('lib'))

gulp.task('lib', buildLib)

const buildModule = gulp.series(removeDir('module'), copyFileTo('module'), build('module'))

gulp.task('module', buildModule)

const buildModern = gulp.series(removeDir('modern'), copyFileTo('modern'), build('modern'))

gulp.task('modern', buildModern)

gulp.task('default', gulp.series(buildLib, buildModule, buildModern))
