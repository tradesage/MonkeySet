// const Benchmark = require('benchmark')
// const fs = require('fs')
// const path = require('path')
// const MonkeySet = require('../../src/monkeyset')

// let monkeyset

// const suite = new Benchmark.Suite('app')

// suite.add({
//   name: "monkeyset.Filter.get('sets') (1000 sets)",
//   fn: done => {
//     monkeyset.Filter.get('sets').end()
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

// // called when the suite starts running
// suite.on('start', () => {})

// // called between running benchmarks
// suite.on('cycle', function(event) {
//   console.log(String(event.target))
// })

// // called when aborted
// suite.on('abort', () => {
//   console.log('bench aborted')
// })

// // called when a test errors
// suite.on('error', e => {
//   console.log('bench error', e)
// })

// suite.on('complete', () => {
//   process.exit()
// })

// suite.run({ async: false })
