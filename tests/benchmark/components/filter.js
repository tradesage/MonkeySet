const Benchmark = require('benchmark')
const fs = require('fs')
const path = require('path')
const MonkeySet = require('../../../src/monkeyset')

const suite = new Benchmark.Suite('app')

const sets1 = new MonkeySet()
sets1.Random.setsFill(1000)
const sets1half = sets1.sets.length / 2

const sets2 = new MonkeySet()
sets2.Random.setsFill(1000000)
const sets2half = sets2.sets.length / 2

suite.add({
  name: `monkeyset.Filter.fetch('sets').first(${sets1half}) (${sets1.sets.length} sets)`,
  fn: done => {
    sets1.Filter.fetch('sets')
      .first(sets1half)
      .result()
  }
})

suite.add({
  name: `monkeyset.Filter.fetch('sets').first(${sets2half}) (${sets2.sets.length} sets)`,
  fn: done => {
    sets2.Filter.fetch('sets')
      .first(sets2half)
      .result()
  }
})

suite.add({
  name: `monkeyset.Filter.fetch('sets').last(${sets1half}) (${sets1.sets.length} sets)`,
  fn: done => {
    sets1.Filter.fetch('sets')
      .last(sets1half)
      .result()
  }
})

suite.add({
  name: `monkeyset.Filter.fetch('sets').last(${sets2half}) (${sets2.sets.length} sets)`,
  fn: done => {
    sets2.Filter.fetch('sets')
      .last(sets2half)
      .result()
  }
})

suite.add({
  name: `monkeyset.Filter.fetch('sets') (${sets1.sets.length} sets)`,
  fn: done => {
    sets1.Filter.fetch('sets').result()
  }
})

suite.add({
  name: `monkeyset.Filter.fetch('sets') (${sets2.sets.length} sets)`,
  fn: done => {
    sets2.Filter.fetch('sets').result()
  }
})

suite.add({
  name: `monkeyset.Filter.fetch('set', 500) (${sets1.sets.length} set)`,
  fn: done => {
    sets1.Filter.fetch('set', 500).result()
  }
})

suite.add({
  name: `monkeyset.Filter.fetch('set', 500000) (${sets2.sets.length} sets)`,
  fn: done => {
    sets2.Filter.fetch('set', 500000).result()
  }
})

suite.add({
  name: `monkeyset.Filter.fetch('column', 'open') (${sets1.sets.length} sets)`,
  fn: done => {
    sets1.Filter.fetch('column', 'open').result()
  }
})

suite.add({
  name: `monkeyset.Filter.fetch('column', 'open') (${sets2.sets.length} sets)`,
  fn: done => {
    sets2.Filter.fetch('column', 'open').result()
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
