const Benchmark = require('benchmark')
const fs = require('fs')
const path = require('path')
const MonkeySet = require('../../../src/monkeyset')

let monkeyset = new MonkeySet()
monkeyset.Random.setsFill(20000)

const workset = monkeyset.Filter.get('column', 'close')
	.last(30)
	.end()

const suite = new Benchmark.Suite('app')

suite.add({
	name: 'monkeyset.Analyzer.RSI',
	fn: done => {
		const sma = monkeyset.Analyzer.RSI({
			period: 20,
			values: workset
		})
	}
})

suite.add({
	name: 'monkeyset.Analyzer.SMA',
	fn: done => {
		const sma = monkeyset.Analyzer.SMA({
			period: 20,
			values: workset
		})
	}
})

// called when the suite starts running
suite.on('start', () => {})

// called between running benchmarks
suite.on('cycle', function(event) {
	console.log(String(event.target))
})

// called when aborted
suite.on('abort', () => {
	console.log('bench aborted')
})

// called when a test errors
suite.on('error', e => {
	console.log('bench error', e)
})

suite.on('complete', () => {
	process.exit()
})

suite.run({ async: false })
