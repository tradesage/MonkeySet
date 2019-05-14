const Benchmark = require('benchmark')
const fs = require('fs')
const path = require('path')
const MonkeySet = require('../../../src/monkeyset')

let monkeyset = new MonkeySet()
monkeyset.Random.setsFill(200000)

const suite = new Benchmark.Suite('app')

for (let index in monkeyset.Indicator.tulind.indicators) {
  if (index != 'rsi') continue
  const indicator = monkeyset.Indicator.tulind.indicators[index]
  const options = {}

  for (var i = indicator.options - 1; i >= 0; i--) {
    options[indicator.option_names[i]] = 10
  }

  suite.add({
    name: "monkeyset.Filter.get('sets')." + index,
    fn: async deffered => {
      await monkeyset.Filter.fetch('sets')[index](options)
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
