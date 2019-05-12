const component = require('../classes/component')
const fs = require('fs')
const path = require('path')
const tulind = require('tulind')

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
    this.tulind = require('tulind')
    for (let indicator in this.tulind.indicators) {
      this[indicator] = async data => {
        const indicatorFunction = this.tulind.indicators[indicator]
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

        return await indicatorFunction.indicator(inputs, options)
      }
    }
  }
}

module.exports = Analyzer
