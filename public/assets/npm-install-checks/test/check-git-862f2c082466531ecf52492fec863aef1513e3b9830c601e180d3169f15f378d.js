var test = require('tap').test
var c = require('../index.js').checkGit
var rimraf = require('rimraf')
var mkdirp = require('mkdirp')
var path = require('path')
var gitFixturePath = path.resolve(__dirname, 'out')

test('is .git repo', function (t) {
  mkdirp(gitFixturePath + '/.git', function () {
    c(gitFixturePath, function (err) {
      t.ok(err, 'error present')
      t.equal(err.code, 'EISGIT')
      t.end()
    })
  })
})

test('is not a .git repo', function (t) {
  c(__dirname, function (err) {
    t.notOk(err, 'error not present')
    t.end()
  })
})

test('non-thing', function (t) {
  c('/path/to/no/where', function (err) {
    t.notOk(err, 'non-existent path is not a .git repo')
    t.end()
  })
})

test('cleanup', function (t) {
  rimraf(gitFixturePath, function () {
    t.pass('cleanup')
    t.end()
  })
})
;
