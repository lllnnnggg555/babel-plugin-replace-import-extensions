const path = require('path')
const gulp = require('gulp')
const fs = require('fs-extra')
const ts = require('gulp-typescript')

const output = path.resolve(__dirname, './lib')
const tsProject = ts.createProject('tsconfig.json')

function removeDir () {
  return function (cb) {
    fs.removeSync(output)
    cb()
  }
}

function copyFileTo () {
  return function (cb) {
    gulp.src(path.resolve(__dirname, './src/**/*.!(js|jsx|ts|tsx)'))
      .pipe(gulp.dest(output))
    cb()
  }
}

function build () {
  return function (cb) {
    gulp.src(path.resolve(__dirname, './src/**/*.?(ts|tsx)'))
      .pipe(tsProject())
      .pipe(gulp.dest(output))
    cb()
  }
}

const buildLib = gulp.series(removeDir(), copyFileTo(), build())

gulp.task('lib', buildLib)

gulp.task('default', buildLib)
