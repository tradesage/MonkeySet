const Benchmark = require('benchmark')
const fs = require('fs')
const path = require('path')
const MonkeySet = require('../../src/monkeyset')

let monkeyset

const suite = new Benchmark.Suite('app')

// TODO: MEMORY ALLOCATION ERRORS :c EVEN WITH LOW AMOUNT OF SETS AND IDK WHY IM STILL HOLDING SHIFT TO TYPE THIS
suite.add({
  name: 'monkeyset.File.save',
  fn: async () => {
    await monkeyset.File.save('./myfile')
  },
  onStart: () => {},
  onError: e => {
    console.log(e)
    throw new Error(e)
  }
})

suite.add({
  name: 'monkeyset.File.load',
  fn: async () => {
    await monkeyset.File.load('./myfile')
  },
  onStart: () => {},
  onError: e => {
    console.log(e)
    throw new Error(e)
  }
})

// called when the suite starts running
suite.on('start', () => {
  console.log('Generating garbage')
  monkeyset = new MonkeySet()
  monkeyset.Random.setsFill(2000000)
  console.log('Starting File component benchmark')
})

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

suite.on('complete', () => {})

suite.run({ async: false })
