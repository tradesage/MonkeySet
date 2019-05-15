const assert = require('assert')
const MonkeySet = require('../../../src/monkeyset')

describe('Filter', function() {
  it("monkeyset.fetch('sets').result()", () => {
    const monkeyset = new MonkeySet([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6])
    assert.deepEqual(monkeyset.fetch('sets').result(), [[1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6]])
  })
  it("monkeyset.fetch('set', 0).result()", () => {
    const monkeyset = new MonkeySet([1, 2, 3, 4, 5, 6], [2, 3, 4, 5, 6, 7])
    assert.deepEqual(monkeyset.fetch('set', 1).result(), [[2, 3, 4, 5, 6, 7]])
  })
  it("monkeyset.fetch('column', 'time').result()", () => {
    const monkeyset = new MonkeySet([1, 2, 3, 4, 5, 6], [2, 3, 4, 5, 6, 7])
    assert.deepEqual(monkeyset.fetch('column', 'time').result(), [1, 2])
  })
  it("monkeyset.fetch('column', 'open').result()", () => {
    const monkeyset = new MonkeySet([1, 2, 3, 4, 5, 6], [2, 3, 4, 5, 6, 7])
    assert.deepEqual(monkeyset.fetch('column', 'open').result(), [2, 3])
  })
  it("monkeyset.fetch('column', 'high').result()", () => {
    const monkeyset = new MonkeySet([1, 2, 3, 4, 5, 6], [2, 3, 4, 5, 6, 7])
    assert.deepEqual(monkeyset.fetch('column', 'high').result(), [3, 4])
  })
  it("monkeyset.fetch('column', 'low').result()", () => {
    const monkeyset = new MonkeySet([1, 2, 3, 4, 5, 6], [2, 3, 4, 5, 6, 7])
    assert.deepEqual(monkeyset.fetch('column', 'low').result(), [4, 5])
  })
  it("monkeyset.fetch('column', 'close').result()", () => {
    const monkeyset = new MonkeySet([1, 2, 3, 4, 5, 6], [2, 3, 4, 5, 6, 7])
    assert.deepEqual(monkeyset.fetch('column', 'close').result(), [5, 6])
  })
  it("monkeyset.fetch('column', 'volume').result()", () => {
    const monkeyset = new MonkeySet([1, 2, 3, 4, 5, 6], [2, 3, 4, 5, 6, 7])
    assert.deepEqual(monkeyset.fetch('column', 'volume').result(), [6, 7])
  })
  it("monkeyset.fetch('set').result()", () => {
    const monkeyset = new MonkeySet([1, 2, 3, 4, 5, 6], [2, 3, 4, 5, 6, 7])
    assert.throws(() => {
      monkeyset.fetch('set').result()
    }, Error)
  })
  it("monkeyset.fetch('column').result()", () => {
    const monkeyset = new MonkeySet([1, 2, 3, 4, 5, 6], [2, 3, 4, 5, 6, 7])
    assert.throws(() => {
      monkeyset.fetch('column').result()
    }, Error)
  })
  it("monkeyset.fetch('column', 'nonexistingcolumn').result()", () => {
    const monkeyset = new MonkeySet([1, 2, 3, 4, 5, 6], [2, 3, 4, 5, 6, 7])
    assert.throws(() => {
      monkeyset.fetch('column', 'nonexistingcolumn').result()
    }, Error)
  })
  it("monkeyset.fetch('nonexistingselector').result()", () => {
    const monkeyset = new MonkeySet([1, 2, 3, 4, 5, 6], [2, 3, 4, 5, 6, 7])
    assert.throws(() => {
      monkeyset.fetch('nonexistingselector').result()
    }, Error)
  })
  it("monkeyset.fetch('sets').sort().result()", () => {
    const monkeyset = new MonkeySet([1, 2, 3, 4, 5, 6], [2, 3, 4, 5, 6, 7])
    assert.deepEqual(
      monkeyset
        .fetch('sets')
        .sort()
        .result(),
      [[1, 2, 3, 4, 5, 6], [2, 3, 4, 5, 6, 7]]
    )
  })
  it("monkeyset.fetch('sets').sort('descending').result()", () => {
    const monkeyset = new MonkeySet([1, 2, 3, 4, 5, 6], [2, 3, 4, 5, 6, 7])
    assert.deepEqual(
      monkeyset
        .fetch('sets')
        .sort('descending')
        .result(),
      [[2, 3, 4, 5, 6, 7], [1, 2, 3, 4, 5, 6]]
    )
  })
  it("monkeyset.fetch('sets').sort('ascending', 'open').result()", () => {
    const monkeyset = new MonkeySet([1, 2, 3, 4, 5, 6], [2, 3, 4, 5, 6, 7])
    assert.deepEqual(
      monkeyset
        .fetch('sets')
        .sort('ascending', 'open')
        .result(),
      [[1, 2, 3, 4, 5, 6], [2, 3, 4, 5, 6, 7]]
    )
  })
  it("monkeyset.fetch('sets').sort('ascending', 'high').result()", () => {
    const monkeyset = new MonkeySet([1, 2, 3, 4, 5, 6], [2, 3, 4, 5, 6, 7])
    assert.deepEqual(
      monkeyset
        .fetch('sets')
        .sort('ascending', 'high')
        .result(),
      [[1, 2, 3, 4, 5, 6], [2, 3, 4, 5, 6, 7]]
    )
  })
  it("monkeyset.fetch('sets').sort('ascending', 'low').result()", () => {
    const monkeyset = new MonkeySet([1, 2, 3, 4, 5, 6], [2, 3, 4, 5, 6, 7])
    assert.deepEqual(
      monkeyset
        .fetch('sets')
        .sort('ascending', 'low')
        .result(),
      [[1, 2, 3, 4, 5, 6], [2, 3, 4, 5, 6, 7]]
    )
  })
  it("monkeyset.fetch('sets').sort('ascending', 'close').result()", () => {
    const monkeyset = new MonkeySet([1, 2, 3, 4, 5, 6], [2, 3, 4, 5, 6, 7])
    assert.deepEqual(
      monkeyset
        .fetch('sets')
        .sort('ascending', 'close')
        .result(),
      [[1, 2, 3, 4, 5, 6], [2, 3, 4, 5, 6, 7]]
    )
  })
  it("monkeyset.fetch('sets').sort('ascending', 'volume').result()", () => {
    const monkeyset = new MonkeySet([1, 2, 3, 4, 5, 6], [2, 3, 4, 5, 6, 7])
    assert.deepEqual(
      monkeyset
        .fetch('sets')
        .sort('ascending', 'volume')
        .result(),
      [[1, 2, 3, 4, 5, 6], [2, 3, 4, 5, 6, 7]]
    )
  })
  it("monkeyset.fetch('sets').sort('ascending', 'nonexistingsort').result()", () => {
    const monkeyset = new MonkeySet([1, 2, 3, 4, 5, 6], [2, 3, 4, 5, 6, 7])
    assert.throws(() => {
      monkeyset
        .fetch('sets')
        .sort('ascending', 'nonexistingsort')
        .result()
    }, Error)
  })
  it("monkeyset.fetch('sets').first(2).result()", () => {
    const monkeyset = new MonkeySet([1, 2, 3, 4, 5, 6], [2, 3, 4, 5, 6, 7], [3, 4, 5, 6, 7, 8], [4, 5, 6, 7, 8, 9])
    const sets = monkeyset
      .fetch('sets')
      .first(2)
      .result()

    assert.deepEqual(sets, [[1, 2, 3, 4, 5, 6], [2, 3, 4, 5, 6, 7]])
  })
  it("monkeyset.fetch('sets').last(2).result()", () => {
    const monkeyset = new MonkeySet([1, 2, 3, 4, 5, 6], [2, 3, 4, 5, 6, 7], [3, 4, 5, 6, 7, 8], [4, 5, 6, 7, 8, 9])
    const sets = monkeyset
      .fetch('sets')
      .last(2)
      .result()

    assert.deepEqual(sets, [[3, 4, 5, 6, 7, 8], [4, 5, 6, 7, 8, 9]])
  })
})
