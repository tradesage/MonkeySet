const tulind = require('tulind')
const fs = require('fs')
const path = require('path')

jsdoc = ``
for (let indicator in tulind.indicators) {
  const indicatorFunction = tulind.indicators[indicator]

  jsdoc += `
/**
 * @Summary ${tulind.indicators[indicator]['full_name']}
 * @name MonkeySet.Indicator#${indicator}
 * @function
 * @param options {object} Options to pass along to the indicator
`
  for (let optionName of indicatorFunction.option_names) {
    jsdoc += ` * @param options.options.${optionName} The option ${optionName}
`
  }

  for (let inputName of indicatorFunction.input_names) {
    jsdoc += ` * @param options.inputs.${inputName} The input ${inputName}
`
  }

  for (let outputName of indicatorFunction.output_names) {
    jsdoc += ` * @returns ${outputName} {array} The result(s) ${outputName} from ${indicator} indicator
`
  }

  jsdoc += ` */`
}

fs.writeFileSync(path.join(__dirname, 'generated.js'), jsdoc)
