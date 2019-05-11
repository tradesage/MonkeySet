const Benchmark = require('benchmark')
const fs = require('fs')
const path = require('path')
const MonkeySet = require('../../../src/monkeyset')

const suite = new Benchmark.Suite('app')

const sets1 = new MonkeySet()
sets1.Random.setsFill(1000)

const sets2 = new MonkeySet()
sets2.Random.setsFill(1000000)

suite.add({
  name: `monkeyset.Filter.get('sets') (${sets1.sets.length} sets)`,
  fn: done => {
    sets1.Filter.get('sets').end()
  }
})

suite.add({
  name: `monkeyset.Filter.get('sets') (${sets2.sets.length} sets)`,
  fn: done => {
    sets2.Filter.get('sets').end()
  }
})

suite.add({
  name: `monkeyset.Filter.get('set', 500) (${sets1.sets.length} set)`,
  fn: done => {
    sets1.Filter.get('set', 500).end()
  }
})

suite.add({
  name: `monkeyset.Filter.get('set', 500000) (${sets2.sets.length} sets)`,
  fn: done => {
    sets2.Filter.get('set', 500000).end()
  }
})

suite.add({
  name: `monkeyset.Filter.get('column', 'open') (${sets1.sets.length} sets)`,
  fn: done => {
    sets1.Filter.get('column', 'open').end()
  }
})

suite.add({
  name: `monkeyset.Filter.get('column', 'open') (${sets2.sets.length} sets)`,
  fn: done => {
    sets2.Filter.get('column', 'open').end()
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
