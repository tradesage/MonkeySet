
const ta = require('./technicalindicators')

module.exports = (values, data) => {
  return ta.SMA.calculate({
    period: data.period,
    values: values
  })
}
