const { describe, it } = require('mocha')
const { expect } = require('chai')
const invalidateRequireCache = require('..')
const touch = require('touch')
const path = require('path')

describe('invalidateRequireCache', function() {
  it('works', function() {
    expect(require.cache[require.resolve('mocha')]).to.exist
    invalidateRequireCache(path.dirname(require.resolve('mocha')))
    expect(require.cache[require.resolve('mocha')]).not.to.exist
    require('mocha')
    expect(require.cache[require.resolve('mocha')]).to.exist
    invalidateRequireCache(path.dirname(require.resolve('mocha')))
    expect(require.cache[require.resolve('mocha')]).to.exist
    touch.sync(path.dirname(require.resolve('mocha')))
    invalidateRequireCache(path.dirname(require.resolve('mocha')))
    expect(require.cache[require.resolve('mocha')]).not.to.exist
  })
})
