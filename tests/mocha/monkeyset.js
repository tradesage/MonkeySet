const assert = require('assert')
const MonkeySet = require('../../src/monkeyset')

describe('MonkeySet', function() {
  it('Valid class object structure', () => {
    const monkeyset = new MonkeySet()
    assert('index' in monkeyset)
    assert('sets' in monkeyset)
  })
})
