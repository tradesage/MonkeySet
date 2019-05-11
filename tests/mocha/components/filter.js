const assert = require('assert')
const MonkeySet = require('../../../src/monkeyset')

describe('Filter', function() {
	it("monkeyset.Filter.get('sets').end()", () => {
		const monkeyset = new MonkeySet([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6])
		assert.deepEqual(monkeyset.Filter.get('sets').end(), [[1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6]])
	})
	it("monkeyset.Filter.get('set', 0).end()", () => {
		const monkeyset = new MonkeySet([1, 2, 3, 4, 5, 6], [2, 3, 4, 5, 6, 7])
		assert.deepEqual(monkeyset.Filter.get('set', 1).end(), [[2, 3, 4, 5, 6, 7]])
	})
	it("monkeyset.Filter.get('column', 'time').end()", () => {
		const monkeyset = new MonkeySet([1, 2, 3, 4, 5, 6], [2, 3, 4, 5, 6, 7])
		assert.deepEqual(monkeyset.Filter.get('column', 'time').end(), [1, 2])
	})
	it("monkeyset.Filter.get('column', 'open').end()", () => {
		const monkeyset = new MonkeySet([1, 2, 3, 4, 5, 6], [2, 3, 4, 5, 6, 7])
		assert.deepEqual(monkeyset.Filter.get('column', 'open').end(), [2, 3])
	})
	it("monkeyset.Filter.get('column', 'high').end()", () => {
		const monkeyset = new MonkeySet([1, 2, 3, 4, 5, 6], [2, 3, 4, 5, 6, 7])
		assert.deepEqual(monkeyset.Filter.get('column', 'high').end(), [3, 4])
	})
	it("monkeyset.Filter.get('column', 'low').end()", () => {
		const monkeyset = new MonkeySet([1, 2, 3, 4, 5, 6], [2, 3, 4, 5, 6, 7])
		assert.deepEqual(monkeyset.Filter.get('column', 'low').end(), [4, 5])
	})
	it("monkeyset.Filter.get('column', 'close').end()", () => {
		const monkeyset = new MonkeySet([1, 2, 3, 4, 5, 6], [2, 3, 4, 5, 6, 7])
		assert.deepEqual(monkeyset.Filter.get('column', 'close').end(), [5, 6])
	})
	it("monkeyset.Filter.get('column', 'volume').end()", () => {
		const monkeyset = new MonkeySet([1, 2, 3, 4, 5, 6], [2, 3, 4, 5, 6, 7])
		assert.deepEqual(monkeyset.Filter.get('column', 'volume').end(), [6, 7])
	})
	it("monkeyset.Filter.get('set').end()", () => {
		const monkeyset = new MonkeySet([1, 2, 3, 4, 5, 6], [2, 3, 4, 5, 6, 7])
		assert.throws(() => {
			monkeyset.Filter.get('set').end()
		}, Error)
	})
	it("monkeyset.Filter.get('column').end()", () => {
		const monkeyset = new MonkeySet([1, 2, 3, 4, 5, 6], [2, 3, 4, 5, 6, 7])
		assert.throws(() => {
			monkeyset.Filter.get('column').end()
		}, Error)
	})
	it("monkeyset.Filter.get('column', 'nonexistingcolumn').end()", () => {
		const monkeyset = new MonkeySet([1, 2, 3, 4, 5, 6], [2, 3, 4, 5, 6, 7])
		assert.throws(() => {
			monkeyset.Filter.get('column', 'nonexistingcolumn').end()
		}, Error)
	})
	it("monkeyset.Filter.get('nonexistingselector').end()", () => {
		const monkeyset = new MonkeySet([1, 2, 3, 4, 5, 6], [2, 3, 4, 5, 6, 7])
		assert.throws(() => {
			monkeyset.Filter.get('nonexistingselector').end()
		}, Error)
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
	it("monkeyset.Filter.get('sets').sort('ascending', 'open').end()", () => {
		const monkeyset = new MonkeySet([1, 2, 3, 4, 5, 6], [2, 3, 4, 5, 6, 7])
		assert.deepEqual(
			monkeyset.Filter.get('sets')
				.sort('ascending', 'open')
				.end(),
			[[1, 2, 3, 4, 5, 6], [2, 3, 4, 5, 6, 7]]
		)
	})
	it("monkeyset.Filter.get('sets').sort('ascending', 'high').end()", () => {
		const monkeyset = new MonkeySet([1, 2, 3, 4, 5, 6], [2, 3, 4, 5, 6, 7])
		assert.deepEqual(
			monkeyset.Filter.get('sets')
				.sort('ascending', 'high')
				.end(),
			[[1, 2, 3, 4, 5, 6], [2, 3, 4, 5, 6, 7]]
		)
	})
	it("monkeyset.Filter.get('sets').sort('ascending', 'low').end()", () => {
		const monkeyset = new MonkeySet([1, 2, 3, 4, 5, 6], [2, 3, 4, 5, 6, 7])
		assert.deepEqual(
			monkeyset.Filter.get('sets')
				.sort('ascending', 'low')
				.end(),
			[[1, 2, 3, 4, 5, 6], [2, 3, 4, 5, 6, 7]]
		)
	})
	it("monkeyset.Filter.get('sets').sort('ascending', 'close').end()", () => {
		const monkeyset = new MonkeySet([1, 2, 3, 4, 5, 6], [2, 3, 4, 5, 6, 7])
		assert.deepEqual(
			monkeyset.Filter.get('sets')
				.sort('ascending', 'close')
				.end(),
			[[1, 2, 3, 4, 5, 6], [2, 3, 4, 5, 6, 7]]
		)
	})
	it("monkeyset.Filter.get('sets').sort('ascending', 'volume').end()", () => {
		const monkeyset = new MonkeySet([1, 2, 3, 4, 5, 6], [2, 3, 4, 5, 6, 7])
		assert.deepEqual(
			monkeyset.Filter.get('sets')
				.sort('ascending', 'volume')
				.end(),
			[[1, 2, 3, 4, 5, 6], [2, 3, 4, 5, 6, 7]]
		)
	})
	it("monkeyset.Filter.get('sets').sort('ascending', 'nonexistingsort').end()", () => {
		const monkeyset = new MonkeySet([1, 2, 3, 4, 5, 6], [2, 3, 4, 5, 6, 7])
		assert.throws(() => {
			monkeyset.Filter.get('sets')
				.sort('ascending', 'nonexistingsort')
				.end()
		}, Error)
	})
	it("monkeyset.Filter.get('sets').first(2).end()", () => {
		const monkeyset = new MonkeySet([1, 2, 3, 4, 5, 6], [2, 3, 4, 5, 6, 7], [3, 4, 5, 6, 7, 8], [4, 5, 6, 7, 8, 9])
		const sets = monkeyset.Filter.get('sets')
			.first(2)
			.end()

		assert.deepEqual(sets, [[1, 2, 3, 4, 5, 6], [2, 3, 4, 5, 6, 7]])
	})
	it("monkeyset.Filter.get('sets').last(2).end()", () => {
		const monkeyset = new MonkeySet([1, 2, 3, 4, 5, 6], [2, 3, 4, 5, 6, 7], [3, 4, 5, 6, 7, 8], [4, 5, 6, 7, 8, 9])
		const sets = monkeyset.Filter.get('sets')
			.last(2)
			.end()

		assert.deepEqual(sets, [[3, 4, 5, 6, 7, 8], [4, 5, 6, 7, 8, 9]])
	})
})
