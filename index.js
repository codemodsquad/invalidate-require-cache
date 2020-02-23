var fs = require('fs')
var path = require('path')

var mtimes = {}

function isPathInsideDir(test, dir) {
  var relative = path.relative(dir, test)
  return relative && !relative.startsWith('..') && !path.isAbsolute(relative)
}

module.exports = function invalidateRequireCache(dir) {
  dir = path.resolve(dir)
  var lastMtime = mtimes[dir]
  var mtime = fs.statSync(dir).mtime
  mtimes[dir] = mtime
  if (lastMtime != null && lastMtime >= mtime) return
  for (var key in require.cache) {
    if (isPathInsideDir(key, dir)) delete require.cache[key]
  }
}
