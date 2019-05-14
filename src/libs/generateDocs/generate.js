const tulind = require('tulind')
const fs = require('fs')
const _ = require('lodash')
const path = require('path')

let jsdoc = ``
for (let indicator in tulind.indicators) {
  const indicatorFunction = tulind.indicators[indicator]

  let example = ` * @example\n`

  let options = []

  jsdoc += `
/**
 * @Summary ${tulind.indicators[indicator]['full_name']}
 * @name MonkeySet.Indicator#${indicator}
 * @function
 * @param options {object} Options to pass along to the ${indicatorFunction.type} function
`
  for (let optionName of indicatorFunction.option_names) {
    jsdoc += ` * @param options.options.${optionName} The option ${optionName}
`
    let newOption = _.random(3, 6)
    const mustFloat = ['acceleration factor step', 'acceleration factor maximum', 'alpha']
    if (mustFloat.includes(optionName)) newOption = _.random(3.33, 6.66)

    if (optionName.indexOf(' ') !== -1) optionName = `'${optionName}'`
    options.push(`${optionName}: ${newOption}`)
  }

  for (let inputName of indicatorFunction.input_names) {
    jsdoc += ` * @param options.inputs.${inputName} The input ${inputName}
`
    if (inputName == 'real') options.push('real: close')
  }

  for (let outputName of indicatorFunction.output_names) {
    jsdoc += ` * @returns ${outputName} {array} from the ${indicator} ${indicatorFunction.type} function
`
  }

  if (options.length >= 1) options = `{${options.join(', ')}}`

  example += ` * monkeyset.fetch('sets').last(20).convert('ohlc').${tulind.indicators[indicator].name}(${options})`
  jsdoc += example
  jsdoc += ` */`
}

fs.writeFileSync(path.join(__dirname, 'generated.js'), jsdoc)
