const Benchmark = require('benchmark')
const fs = require('fs')
const path = require('path')
const MonkeySet = require('../../../src/monkeyset')

let monkeyset

const suite = new Benchmark.Suite('app')

suite.add({
  name: 'monkeyset.Operation.add',
  fn: done => {
    monkeyset.Operation.add([1, 2, 3, 4, 5, 6])
  },
  onStart: () => {
    monkeyset = new MonkeySet()
  },
  onError: e => {
    console.log(e)
    throw new Error(e)
  },
  onComplete: () => {
    // console.log(monkeyset.fetch('sets').result().length)
  }
})

suite.add({
  name: 'monkeyset.Operation.clear',
  fn: done => {
    monkeyset.Operation.clear()
  },
  onStart: () => {},
  onError: e => {
    console.log(e)
    throw new Error(e)
  },
  onComplete: () => {}
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
