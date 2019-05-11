const assert = require('assert')
const MonkeySet = require('../../../src/monkeyset')

describe('Operation', function() {
	it('monkeyset.Operation.add()', async () => {
		const monkeyset = new MonkeySet()
		monkeyset.Operation.add([1, 2, 3, 4, 5, 6])
		assert.deepEqual(monkeyset.Filter.get('set', 0).end(), [[1, 2, 3, 4, 5, 6]])
	})
	it('monkeyset.Operation.clear()', async () => {
		const monkeyset = new MonkeySet([1, 2, 3, 4, 5, 6])
		monkeyset.Operation.clear()
		assert.equal(monkeyset.Filter.get('sets').end().length, 0)
		assert.deepEqual(monkeyset.Filter.get('sets').end(), [])
	})
})
