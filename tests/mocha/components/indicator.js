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

  it('monkeyset.indicator.' + index, async () => {
    await monkeyset.Indicator[index](analyzerData)
  })
}
