const monkeysetComponent = require('../classes/monkeysetComponent')

class Random {
	constructor(...args) {
		// super(...args)
		console.log('RANDOM CONSTRUCTED', ...args)
	}

	setsFill(amount) {
		console.log(this.monkeyset)
		// console.log('yanke', amount)
	}
}

module.exports = Random
