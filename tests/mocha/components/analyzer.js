const assert = require('assert')
const MonkeySet = require('../../../src/monkeyset')
const tulind = require('tulind')

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
  it('monkeyset.Analyzer.candlePattern(' + pattern + ')', async () => {
    monkeyset.Analyzer.candlePattern(pattern, ohlc)
  })
}

for (let index in tulind.indicators) {
  const indicator = tulind.indicators[index]
  let analyzerData = {
    options: {},
    inputs: {}
  }

  for (let i = indicator.options - 1; i >= 0; i--) {
    let value = 10

    if (indicator.option_names[i] == 'alpha') value = 0.2
    if (indicator.option_names[i] == 'acceleration factor step') value = 0.2

    analyzerData.options[indicator.option_names[i]] = value
  }

  for (let i = 0; i < indicator.inputs; i++) {
    analyzerData.inputs[indicator.input_names[i]] = worksetMapping[indicator.input_names[i]]
  }

  it('monkeyset.Analyzer.indicator(' + index + ')', async () => {
    await monkeyset.Analyzer.indicator[index](analyzerData)
  })
}
