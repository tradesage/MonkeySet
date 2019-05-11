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
	 * Completely fills specified amount of sets in a MonkeySet
	 * @summary Sets a components data
	 * @param {number} - Amount of sets to create randomly
	 * @returns {object} MonkeySet
	 * @example
	 * const monkeyset = new MonkeySet()
	 * monkeyset.Random.setsFill(200)
	 */
	setsFill(amount) {
		const startDate = new Date()
		const baseVolume = Math.random() * (3000 - -200) + -200
		const basePrice = Math.random() * (3000 - -200) + -200
		let price = basePrice
		let volume = baseVolume

		for (let i = 0; i < amount; i++) {
			let priceGoUp = Boolean(Math.random() < 0.5)

			if (priceGoUp) {
				price += Math.random() * (10 - 1) + 5
			} else {
				price -= Math.random() * (10 - 1) + 5
			}

			const highModifier = Math.random() * (30 - -30) - 30
			const lowModifier = Math.random() * (30 - -30) - 30
			const closeModifier = Math.random() * (30 - -30) - 30
			const volumeModifer = Math.random() * (5 - -5) - 5

			const open = price.toFixed(2)
			const high = (price + highModifier).toFixed(2)
			const low = (price + lowModifier).toFixed(2)
			const close = (price + closeModifier).toFixed(2)
			volume += parseFloat(volumeModifer)

			this.monkeyset.Operation.add([startDate.setDate(startDate.getDate() + 1 * i), open, high, low, close, volume.toFixed(2)])
		}

		return this.monkeyset
	}
}

module.exports = Random
