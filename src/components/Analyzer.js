const component = require('../classes/component')
const fs = require('fs')
const path = require('path')
const tulind = require('tulind')
const technicalindicators = require('technicalindicators')

/**
 * @summary The Analyzer component analyses MonkeySet data
 * @memberof MonkeySet
 */
class Analyzer extends component {
  /**
   * @hideconstructor
   */
  constructor(...args) {
    super(...args)

    this.candlePatterns = [
      'abandonedbaby',
      'doji',
      'bearishengulfingpattern',
      'bullishengulfingpattern',
      'darkcloudcover',
      'downsidetasukigap',
      'dragonflydoji',
      'gravestonedoji',
      'bullishharami',
      'bearishharami',
      'bullishharamicross',
      'bearishharamicross',
      'eveningdojistar',
      'eveningstar',
      'morningdojistar',
      'morningstar',
      'bullishmarubozu',
      'bearishmarubozu',
      'piercingline',
      'bullishspinningtop',
      'bearishspinningtop',
      'threeblackcrows',
      'threewhitesoldiers',
      'bullishhammerstick',
      'bearishhammerstick',
      'bullishinvertedhammerstick',
      'bearishinvertedhammerstick',
      'hammerpattern',
      'hammerpatternunconfirmed',
      'hangingman',
      'hangingmanunconfirmed',
      'shootingstar',
      'shootingstarunconfirmed',
      'tweezertop',
      'tweezerbottom',
      'fibonacciretracement'
    ]
  }

  /**
   * @summary Pattern detection in candlestick data
   * @param {string} - Pattern type to test
   * @param {object} - OHLC data to test on
   * @example
   * const isAbandonedBaby = monkeyset.Analyzer.pattern('threeblackcrows', {
   *   open: monkeyset.Filter.get('column', 'open').end(),
   *   high: monkeyset.Filter.get('column', 'high').end(),
   *   low: monkeyset.Filter.get('column', 'low').end(),
   *   close: monkeyset.Filter.get('column', 'close').end()
   * })
   *
   */
  pattern(pattern, data) {
    if (this.candlePatterns.includes(pattern) == false) throw new Error(`${pattern} is not a valid candlestick detection pattern`)
    return technicalindicators[pattern](data)
  }

  /**
   * @summary Pattern predict detection via a tensorflow trained model
   * @param {float[]} - column data from a MonkeySet
   * @example
   * const predict = await monkeyset.Analyzer.predict(
   *  monkeyset.Filter.get('column', 'close').last(400).end()
   * )
   *
   * console.log(predict)
   */
  async predict(columnData) {
    const predictPattern = await technicalindicators.predictPattern({ values: columnData })
    const probability = predictPattern.probability
    const hs = await technicalindicators.hasHeadAndShoulder({ values: columnData })
    const ihs = await technicalindicators.hasInverseHeadAndShoulder({ values: columnData })
    const db = await technicalindicators.hasDoubleBottom({ values: columnData })
    const dt = await technicalindicators.hasDoubleTop({ values: columnData })
    const tu = await technicalindicators.isTrendingUp({ values: columnData })
    const td = await technicalindicators.isTrendingDown({ values: columnData })

    let pattern = false
    if (hs) pattern = 'HeadAndShoulder'
    if (ihs) pattern = 'InverseHeadAndShoulder'
    if (db) pattern = 'DoubleBottom'
    if (dt) pattern = 'DoubleTop'
    if (tu) pattern = 'Uptrend'
    if (td) pattern = 'Downtrend'

    return {
      probability,
      pattern
    }
  }
}

module.exports = Analyzer
