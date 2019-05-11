const assert = require('assert')
const MonkeySet = require('../../src/monkeyset')

describe('MonkeySet', function() {
  it('Valid class object structure', () => {
    const monkeyset = new MonkeySet()
    assert('time' in monkeyset.sets)
    assert('open' in monkeyset.sets)
    assert('high' in monkeyset.sets)
    assert('low' in monkeyset.sets)
    assert('close' in monkeyset.sets)
    assert('volume' in monkeyset.sets)
    assert('index' in monkeyset.sets)
  })
})
