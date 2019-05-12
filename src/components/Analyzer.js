const component = require('../classes/component')
const fs = require('fs')
const path = require('path')
const tulind = require('tulind')
const technicalindicators = require('technicalindicators')

/**
 * The Analyzer component houses technical indicators,
 * check the see more link to see a whole range of indicators you can use
 * @summary General analyzer component for composing interesting analyzes from a MonkeySet
 * @memberof MonkeySet
 * @see https://tulipindicators.org/list
 * @example
 * // See this list for all analyzers you can use: https://tulipindicators.org/list
 * const rsi = await monkeyset.Analyzer.rsi({
 *   options: {
 *     period: 5
 *   },
 *   inputs: {
 *     real: monkeyset.Filter.get('column', 'close').last(10).end()
 *   }
 * })
 */
class Analyzer extends component {
  /**
   * @hideconstructor
   */
  constructor(...args) {
    super(...args)

    // Load all tulip indicators
    this.indicator = {}
    for (let indicator in tulind.indicators) {
      this.indicator[indicator] = async data => {
        const indicatorFunction = tulind.indicators[indicator]
        if ('inputs' in data == false) throw new Error(`You need to specify the inputs parameter for this indicator`)
        const inputs = []
        const options = []
        for (let inputName of indicatorFunction.input_names) {
          if (data.inputs[inputName]) inputs.push(data.inputs[inputName])
        }

        for (let optionName of indicatorFunction.option_names) {
          if (data.options[optionName]) options.push(data.options[optionName])
        }

        if (indicatorFunction.options != options.length)
          throw new Error(`${indicatorFunction.name} expects ${indicatorFunction.option_names} to be required in options`)

        if (indicatorFunction.inputs != inputs.length)
          throw new Error(`${indicatorFunction.name} expects ${indicatorFunction.input_names} to be required in inputs`)

        const result = await indicatorFunction.indicator(inputs, options)

        const returnObject = {}
        for (let outputName of indicatorFunction.output_names) {
          returnObject[outputName] = result.splice(0, 1)[0]
        }

        return returnObject
      }
    }

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
   * const isAbandonedBaby = monkeyset.Analyzer.candlePattern('threeblackcrows', {
   *   open: monkeyset.Filter.get('column', 'open').end(),
   *   high: monkeyset.Filter.get('column', 'high').end(),
   *   low: monkeyset.Filter.get('column', 'low').end(),
   *   close: monkeyset.Filter.get('column', 'close').end()
   * })
   *
   */
  candlePattern(pattern, data) {
    if (this.candlePatterns.includes(pattern) == false) throw new Error(`${pattern} is not a valid candlestick detection pattern`)
    return technicalindicators[pattern](data)
  }

  /**
   * @summary Pattern detection via a tensorflow trained model
   * @param {float[]} - column data from a MonkeySet
   * @example
   * const predict = await monkeyset.Analyzer.patternDetection(
   *  monkeyset.Filter.get('column', 'close').last(400).end()
   * )
   *
   * console.log(predict)
   */
  async patternDetection(columnData) {
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
