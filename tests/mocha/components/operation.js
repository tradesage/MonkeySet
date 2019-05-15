const assert = require('assert')
const MonkeySet = require('../../../src/monkeyset')

describe('Operation', function() {
  it('monkeyset.Operation.add()', async () => {
    const monkeyset = new MonkeySet()
    monkeyset.Operation.add([1, 2, 3, 4, 5, 6])
    assert.deepEqual(monkeyset.fetch('set', 0).result(), [[1, 2, 3, 4, 5, 6]])
  })
  it('monkeyset.Operation.clear()', async () => {
    const monkeyset = new MonkeySet([1, 2, 3, 4, 5, 6])
    monkeyset.Operation.clear()
    assert.equal(monkeyset.fetch('sets').result().length, 0)
    assert.deepEqual(monkeyset.fetch('sets').result(), [])
  })
})
