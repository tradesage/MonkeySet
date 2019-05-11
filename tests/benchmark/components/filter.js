const Benchmark = require('benchmark')
const fs = require('fs')
const path = require('path')
const MonkeySet = require('../../../src/monkeyset')

let monkeyset

const suite = new Benchmark.Suite('app')

suite.add({
  name: "monkeyset.Filter.get('setsmap') (1000 setsmap)",
  fn: done => {
    monkeyset.Filter.get('setsmap').end()
  },
  onStart: () => {
    monkeyset = new MonkeySet()
    monkeyset.Random.setsFill(1000)
  },
  onError: e => {
    console.log(e)
    throw new Error(e)
  },
  onComplete: () => {}
})

suite.add({
  name: "monkeyset.Filter.get('setsmap') (100000 setsmap)",
  fn: done => {
    monkeyset.Filter.get('setsmap').end()
  },
  onStart: () => {
    monkeyset = new MonkeySet()
    monkeyset.Random.setsFill(100000)
  },
  onError: e => {
    console.log(e)
    throw new Error(e)
  },
  onComplete: () => {}
})

suite.add({
  name: "monkeyset.Filter.get('setsfor') (1000 setsfor)",
  fn: done => {
    monkeyset.Filter.get('setsfor').end()
  },
  onStart: () => {
    monkeyset = new MonkeySet()
    monkeyset.Random.setsFill(1000)
  },
  onError: e => {
    console.log(e)
    throw new Error(e)
  },
  onComplete: () => {}
})

suite.add({
  name: "monkeyset.Filter.get('setsfor') (100000 setsfor)",
  fn: done => {
    monkeyset.Filter.get('setsfor').end()
  },
  onStart: () => {
    monkeyset = new MonkeySet()
    monkeyset.Random.setsFill(100000)
  },
  onError: e => {
    console.log(e)
    throw new Error(e)
  },
  onComplete: () => {}
})

// suite.add({
//   name: "monkeyset.Filter.get('set', 500) (1000 sets)",
//   fn: done => {
//     monkeyset.Filter.get('set', 500).end()
//   },
//   onStart: () => {
//     monkeyset = new MonkeySet()
//     monkeyset.Random.setsFill(1000)
//   },
//   onError: e => {
//     console.log(e)
//     throw new Error(e)
//   },
//   onComplete: () => {}
// })

// suite.add({
//   name: "monkeyset.Filter.get('set', 50000) (100000 sets)",
//   fn: done => {
//     monkeyset.Filter.get('set', 50000).end()
//   },
//   onStart: () => {
//     monkeyset = new MonkeySet()
//     monkeyset.Random.setsFill(100000)
//   },
//   onError: e => {
//     console.log(e)
//     throw new Error(e)
//   },
//   onComplete: () => {}
// })

// suite.add({
//   name: "monkeyset.Filter.get('column', 'open') (1000 sets)",
//   fn: done => {
//     monkeyset.Filter.get('column', 'open').end()
//   },
//   onStart: () => {
//     monkeyset = new MonkeySet()
//     monkeyset.Random.setsFill(1000)
//   },
//   onError: e => {
//     console.log(e)
//     throw new Error(e)
//   },
//   onComplete: () => {}
// })

// suite.add({
//   name: "monkeyset.Filter.get('column', 'open') (100000 sets)",
//   fn: done => {
//     monkeyset.Filter.get('column', 'open').end()
//   },
//   onStart: () => {
//     monkeyset = new MonkeySet()
//     monkeyset.Random.setsFill(100000)
//   },
//   onError: e => {
//     console.log(e)
//     throw new Error(e)
//   },
//   onComplete: () => {}
// })

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
