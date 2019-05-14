const assert = require('assert')
const MonkeySet = require('../../../src/monkeyset')
const tulind = require('tulind')

let monkeyset = new MonkeySet()
monkeyset.Random.setsFill(400)

for (let pattern of monkeyset.Analyzer.candlePatterns) {
  it('monkeyset.Analyzer.pattern(' + pattern + ')', async () => {
    const result = monkeyset
      .fetch('sets')
      .last(50)
      .convert('ohlc')
      .pattern(pattern)
  })
}

it('monkeyset.Analyzer.predict()', async () => {
  const predict = await monkeyset.fetch('column', 'close').predictPattern()
})
