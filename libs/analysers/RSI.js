
const ta = require('./technicalindicators')

module.exports = (values, data) => {
  return ta.RSI.calculate({
    period: data.period,
    values: values
  })
}
