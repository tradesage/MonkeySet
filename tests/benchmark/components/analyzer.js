const Benchmark = require('benchmark')
const fs = require('fs')
const path = require('path')
const MonkeySet = require('../../../src/monkeyset')

let monkeyset = new MonkeySet()
monkeyset.Random.setsFill(200000)

const workset1 = monkeyset.Filter.fetch('column', 'high')
  .last(50)
  .result()

const workset2 = monkeyset.Filter.fetch('column', 'low')
  .last(50)
  .result()

const workset3 = monkeyset.Filter.fetch('column', 'close')
  .last(50)
  .result()

const workset4 = monkeyset.Filter.fetch('column', 'volume')
  .last(50)
  .result()

const workset5 = monkeyset.Filter.fetch('column', 'open')
  .last(50)
  .result()

const suite = new Benchmark.Suite('app')

const worksetMapping = {
  real: workset1,
  high: workset1,
  low: workset2,
  close: workset3,
  volume: workset4,
  open: workset5
}

for (let pattern of monkeyset.Analyzer.candlePatterns) {
  suite.add({
    name: 'monkeyset.Analyzer.pattern.' + pattern,
    fn: deffered => {
      monkeyset.Analyzer.pattern(pattern)
      deffered.resolve()
    },
    defer: true
  })
}

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

suite.run({ async: true })
