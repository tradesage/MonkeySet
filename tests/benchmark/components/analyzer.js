const Benchmark = require('benchmark')
const fs = require('fs')
const path = require('path')
const MonkeySet = require('../../../src/monkeyset')

let monkeyset = new MonkeySet()
monkeyset.Random.setsFill(200000)

const workset1 = monkeyset.Filter.get('column', 'high')
  .last(50)
  .end()

const workset2 = monkeyset.Filter.get('column', 'low')
  .last(50)
  .end()

const workset3 = monkeyset.Filter.get('column', 'close')
  .last(50)
  .end()

const workset4 = monkeyset.Filter.get('column', 'volume')
  .last(50)
  .end()

const workset5 = monkeyset.Filter.get('column', 'open')
  .last(50)
  .end()

const suite = new Benchmark.Suite('app')

const worksetMapping = {
  real: workset1,
  high: workset1,
  low: workset2,
  close: workset3,
  volume: workset4,
  open: workset5
}

const ohlc = {
  open: worksetMapping.open,
  high: worksetMapping.high,
  low: worksetMapping.low,
  close: worksetMapping.close
}

for (let pattern of monkeyset.Analyzer.candlePatterns) {
  suite.add({
    name: 'monkeyset.Analyzer.candlePattern.' + pattern,
    fn: deffered => {
      monkeyset.Analyzer.candlePattern(pattern, ohlc)
      deffered.resolve()
    },
    defer: true
  })
}

for (let index in monkeyset.Analyzer.tulind.indicators) {
  const indicator = monkeyset.Analyzer.tulind.indicators[index]
  let analyzerData = {
    options: {},
    inputs: {}
  }

  for (var i = indicator.options - 1; i >= 0; i--) {
    analyzerData.options[indicator.option_names[i]] = 10
  }

  for (var i = 0; i < indicator.inputs; i++) {
    analyzerData.inputs[indicator.input_names[i]] = worksetMapping[indicator.input_names[i]]
  }

  suite.add({
    name: 'monkeyset.Analyzer.' + index,
    fn: async deffered => {
      await monkeyset.Analyzer[index](analyzerData)
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
