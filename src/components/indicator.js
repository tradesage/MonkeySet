const component = require('../classes/component')
const tulind = require('tulind')
class Indicator extends component {
  /**
   * Indicator component houses all indicators to use on MonkeySets, please
   * note that if you are missing any inputs or options the script will throw
   * a error and let you know what it needs
   * @summary Creating indicators from a MonkeySet
   * @class Indicator
   * @memberof MonkeySet
   * @hideconstructor
   * @example
   * const rsi = await monkeyset.Indicator.rsi({
   *   options: {
   *     period: 5
   *   },
   *   inputs: {
   *     real: monkeyset.Filter.get('column', 'close').last(10).end()
   *   }
   * })
   */
  constructor(...args) {
    super(...args)

    // Load all tulip indicators
    for (let indicator in tulind.indicators) {
      this[indicator] = async data => {
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
  }
}

module.exports = Indicator
