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

    this.monkeyset.chain.candlePatterns = this.candlePatterns
    this.monkeyset.chain.pattern = this.pattern
    this.monkeyset.chain.predictPattern = this.predictPattern
  }

  /**
   * @summary Pattern detection in candlestick data
   * @param {string} - Pattern type to test
   * @param {object} - OHLC data to test on
   * @example
   * const isAbandonedBaby = monkeyset.Analyzer.pattern('threeblackcrows', {
   *   open: monkeyset.fetch('column', 'open').result(),
   *   high: monkeyset.fetch('column', 'high').result(),
   *   low: monkeyset.fetch('column', 'low').result(),
   *   close: monkeyset.fetch('column', 'close').result()
   * })
   *
   */
  pattern(pattern) {
    if (this.dataformat != 'ohlc') {
      throw new Error(`analyzers only work on ohlc data format when fetching sets data, not on a ${this.dataformat} one`)
    }

    if (this.candlePatterns.includes(pattern) == false) throw new Error(`${pattern} is not a valid candlestick detection pattern`)
    return technicalindicators[pattern](this.sets)
  }

  /**
   * @summary Pattern predict detection via a tensorflow trained model
   * @param {float[]} - column data from a MonkeySet
   * @example
   * const predictPattern = await monkeyset.Analyzer.predictPattern(
   *  monkeyset.fetch('column', 'close').last(400).result()
   * )
   *
   * console.log(predictPattern)
   */
  async predictPattern() {
    if (this.selector != 'column') {
      throw new Error(`predictPattern only works on column data, not on a ${this.selector} one`)
    }

    const predictPattern = await technicalindicators.predictPattern({ values: this.sets })
    const probability = predictPattern.probability
    const hs = await technicalindicators.hasHeadAndShoulder({ values: this.sets })
    const ihs = await technicalindicators.hasInverseHeadAndShoulder({ values: this.sets })
    const db = await technicalindicators.hasDoubleBottom({ values: this.sets })
    const dt = await technicalindicators.hasDoubleTop({ values: this.sets })
    const tu = await technicalindicators.isTrendingUp({ values: this.sets })
    const td = await technicalindicators.isTrendingDown({ values: this.sets })

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
