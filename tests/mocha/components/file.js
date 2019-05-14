const assert = require('assert')
const MonkeySet = require('../../../src/monkeyset')

describe('File', function() {
  it('monkeyset.File.save()', async () => {
    const monkeyset = new MonkeySet([1, 2, 3, 4, 5, 6])
    await monkeyset.File.save('./testfile.monkeyset')
  })
  // TODO: fix
  // it('monkeyset.File.load()', async () => {
  //  const monkeyset = new MonkeySet()
  //  await monkeyset.File.load('./testfile.monkeyset')
  //  assert.deepEqual(monkeyset.Filter.fetch('sets').result(), [[1, 2, 3, 4, 5, 6]])
  // })
})
