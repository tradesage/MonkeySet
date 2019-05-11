const assert = require('assert')
const MonkeySet = require('../../src/monkeyset')

describe('Events', done => {
	it('add', done => {
		const monkeyset = new MonkeySet()

		monkeyset.event.on('add', function() {
			done()
		})

		monkeyset.Operation.add([1, 2, 3, 4, 5, 6])
	})
	it('clear', done => {
		const monkeyset = new MonkeySet()

		monkeyset.event.on('clear', function() {
			done()
		})

		monkeyset.Operation.clear()
	})
	it('fileSave', done => {
		const monkeyset = new MonkeySet()

		monkeyset.event.on('fileSave', function() {
			done()
		})

		monkeyset.File.save('./testfile.monkeyset')
	})
	it('fileLoad', done => {
		const monkeyset = new MonkeySet()

		monkeyset.event.on('fileLoad', function() {
			done()
		})

		monkeyset.File.load('./testfile.monkeyset')
	})
})
