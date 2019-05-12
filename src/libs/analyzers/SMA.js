const ta = require('./technicalindicators')

module.exports = data => {
	return ta.SMA.calculate({
		period: data.period,
		values: data.values
	})
}
