const assert = require('assert')
const MonkeySet = require('../../../src/monkeyset')
const tulind = require('tulind')

let monkeyset = new MonkeySet()
monkeyset.Random.setsFill(200000)

const workset = monkeyset
  .fetch('sets')
  .last(50)
  .convert('ohlc')
  .result()

for (let index in tulind.indicators) {
  const indicator = tulind.indicators[index]
  let options = {
    real: 'close'
  }

  for (let i = indicator.options - 1; i >= 0; i--) {
    let value = 10

    if (indicator.option_names[i] == 'alpha') value = 0.2
    if (indicator.option_names[i] == 'acceleration factor step') value = 0.2

    options[indicator.option_names[i]] = value
  }

  // workset

  console.log(options)

  it('monkeyset.indicator.' + index, async () => {
    monkeyset.chain.sets = workset
    await monkeyset.Indicator[index](options)
  })
}
