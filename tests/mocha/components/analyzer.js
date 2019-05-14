const assert = require('assert')
const MonkeySet = require('../../../src/monkeyset')
const tulind = require('tulind')

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
  it('monkeyset.Analyzer.pattern(' + pattern + ')', async () => {
    monkeyset.Analyzer.pattern(pattern, ohlc)
  })
}

it('monkeyset.Analyzer.predict()', async () => {
  const predict = await monkeyset.Analyzer.predict(
    monkeyset.Filter.fetch('column', 'close')
      .last(400)
      .result()
  )
  console.log(predict)
})
