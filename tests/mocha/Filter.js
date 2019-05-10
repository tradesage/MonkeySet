const assert = require('assert')
const MonkeySet = require('../../src/monkeyset')

describe('Filter', function() {
	it("monkeyset.Filter.get('sets').end()", () => {
		const monkeyset = new MonkeySet([1, 2, 3, 4, 5, 6])
		assert.deepEqual(monkeyset.Filter.get('sets').end(), [[1, 2, 3, 4, 5, 6]])
	})
	it("monkeyset.Filter.get('set', 0).end()", () => {
		const monkeyset = new MonkeySet([1, 2, 3, 4, 5, 6], [2, 3, 4, 5, 6, 7])
		assert.deepEqual(monkeyset.Filter.get('set', 1).end(), [[2, 3, 4, 5, 6, 7]])
	})
	it("monkeyset.Filter.get('column', 'open').end()", () => {
		const monkeyset = new MonkeySet([1, 2, 3, 4, 5, 6], [2, 3, 4, 5, 6, 7])
		assert.deepEqual(monkeyset.Filter.get('column', 'open').end(), [2, 3])
	})
	it("monkeyset.Filter.get('sets').sort().end()", () => {
		const monkeyset = new MonkeySet([1, 2, 3, 4, 5, 6], [2, 3, 4, 5, 6, 7])
		assert.deepEqual(
			monkeyset.Filter.get('sets')
				.sort()
				.end(),
			[[1, 2, 3, 4, 5, 6], [2, 3, 4, 5, 6, 7]]
		)
	})
	it("monkeyset.Filter.get('sets').sort('descending').end()", () => {
		const monkeyset = new MonkeySet([1, 2, 3, 4, 5, 6], [2, 3, 4, 5, 6, 7])
		assert.deepEqual(
			monkeyset.Filter.get('sets')
				.sort('descending')
				.end(),
			[[2, 3, 4, 5, 6, 7], [1, 2, 3, 4, 5, 6]]
		)
	})
})
