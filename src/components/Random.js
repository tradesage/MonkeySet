const component = require('../classes/component')

/**
 * @summary For creating random data in a MonkeySet
 * @memberof MonkeySet
 */
class Random extends component {
	/**
	 * @hideconstructor
	 */
	constructor(...args) {
		super(...args)
	}

	/**
	 * Completely fills specified amount of sets in a MonkeySet with random fake OHLC data
	 * @summary Fills a MonkeySet with fake data
	 * @param {number} - Amount of sets to create randomly
	 * @returns {object} MonkeySet
	 * @example
	 * const monkeyset = new MonkeySet()
	 * monkeyset.Random.setsFill(200)
	 */
	setsFill(amount) {
		const startDate = new Date()
		const baseVolume = Math.random() * (3000 - -200) + -200
		const basePrice = Math.random() * (8000 - -200) + -200
		let price = basePrice
		let volume = baseVolume

		for (let i = 0; i < amount; i++) {
			if (Boolean(Math.random() < 0.5)) {
				price += Math.random() * (10 - 1) + 5
			} else {
				price -= Math.random() * (10 - 1) + 5
			}

			const highModifier = Math.random() * (30 - -30) - 30
			const lowModifier = Math.random() * (30 - -30) - 30
			const closeModifier = Math.random() * (30 - -30) - 30
			const volumeModifer = Math.random() * (5 - -5) - 5

			const open = parseFloat(price.toFixed(2))
			const high = parseFloat((price + highModifier).toFixed(2))
			const low = parseFloat((price + lowModifier).toFixed(2))
			const close = parseFloat((price + closeModifier).toFixed(2))
			volume += parseFloat(volumeModifer)
			volume = parseFloat(parseFloat(volume).toFixed(2))

			this.monkeyset.Operation.add([startDate.setDate(startDate.getDate() + 1), open, high, low, close, volume])
		}

		return this.monkeyset
	}
}

module.exports = Random
