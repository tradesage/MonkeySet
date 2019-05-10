const assert = require('assert')
const MonkeySet = require('../../src/monkeyset')

describe('File', function() {
	it('monkeyset.File.save()', async () => {
		const monkeyset = new MonkeySet([1, 2, 3, 4, 5, 6])
		await monkeyset.File.save('./testfile.monkeyset')
	})
	// it('monkeyset.File.load()', async () => {
	// 	const monkeyset = new MonkeySet()
	// 	await monkeyset.File.load('./testfile.monkeyset')
	// 	console.log(monkeyset.Filter.get('sets').end())
	// 	assert.deepEqual(monkeyset.Filter.get('sets').end(), [[1, 2, 3, 4, 5, 6]])
	// })
})
