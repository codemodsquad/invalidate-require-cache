const { describe, it } = require('mocha')
const { expect } = require('chai')
const invalidateRequireCache = require('..')
const touch = require('touch')
const path = require('path')

const nodeModules = path.resolve(__dirname, '..', 'node_modules')

describe('invalidateRequireCache', function() {
  it('works', function() {
    expect(require.cache[require.resolve('mocha')]).to.exist
    invalidateRequireCache(nodeModules)
    expect(require.cache[require.resolve('mocha')]).not.to.exist
    require('mocha')
    expect(require.cache[require.resolve('mocha')]).to.exist
    invalidateRequireCache(nodeModules)
    expect(require.cache[require.resolve('mocha')]).to.exist
    touch.sync(nodeModules)
    invalidateRequireCache(nodeModules)
    expect(require.cache[require.resolve('mocha')]).not.to.exist
  })
})
