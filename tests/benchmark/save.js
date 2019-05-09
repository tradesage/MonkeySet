const Benchmark = require('benchmark')
const fs = require('fs')
const path = require('path')
const MonkeySet = require('../../src/monkeyset')

let monkeyset

const suite = new Benchmark.Suite('app', {
  'onStart': () => {
    monkeyset = new MonkeySet()
    for (let i = 0; i < 5000000; i++) {
      monkeyset.add([i,1,2,3,4,5])
    }
  },
})

// JSON.Stringify
suite.add({
  'name': 'JSON.stringify',
  'fn': async() => {
    await monkeyset.rows().file('test').save()
  },
  'onStart': () => {
  },
  'onComplete': () => {

  }
})

// called when the suite starts running
suite.on('start', () => {
  console.log('bench started')
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
suite.on('error', (e) => {
  console.log('bench error', e)
})

suite.on('complete', () => {
  fs.unlinkSync(path.join(__dirname, './test.monkeyset'))
  process.exit(0)
})

suite.run()
