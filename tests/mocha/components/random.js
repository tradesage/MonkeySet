const assert = require('assert')
const MonkeySet = require('../../../src/monkeyset')

describe('Random', function() {
  it('monkeyset.Random.setsFill(200)', async () => {
    const monkeyset = new MonkeySet()
    monkeyset.Random.setsFill(200)
    assert.equal(monkeyset.Filter.fetch('sets').result().length, 200)
  })
})
