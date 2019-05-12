const ta = require('./technicalindicators')

module.exports = data => {
	return ta.RSI.calculate({
		period: data.period,
		values: data.values
	})
}
