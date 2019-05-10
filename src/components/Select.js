const component = require('../classes/component')

class Select extends component {
	/**
	 * @hideconstructor
	 * @summary For selecting data from a MonkeySet
	 * @augments component
	 * @memberof MonkeySet
	 * @augments Select
	 */
	constructor(...args) {
		super(...args)
	}

	/**
	 * @summary Grabs the last amount of sets of a MonkeySet
	 * @param {number} - Amount to grab
	 * @returns {object} MonkeySet class reference
	 */
	last(amount = 1) {
		this.chainSet = this.chainSet.slice(Math.max(this.chainSet.length - amount, 1))
		return this
	}

	/**
	 * @summary Grabs the first amount of sets of a MonkeySet
	 * @param {number} - Amount to grab
	 * @returns {object} MonkeySet class reference
	 */
	first(amount = 1) {
		this.chainSet = this.chainSet.slice(0, amount)
		return this
	}

	/**
	 * @summary Sorts a MonkeySet based on order and column specified
	 * @param {string} - Order to sort by
	 * @param {string} - Column to sort on
	 * @returns {object} MonkeySet class reference
	 */
	sort(order = 'ascending', column = 'time') {
		// We are dealing with a array in array
		if (typeof this.chainSet[0] == 'object') {
			let columnIndex
			if (column == 'time') columnIndex = 0
			if (column == 'open') columnIndex = 1
			if (column == 'high') columnIndex = 2
			if (column == 'low') columnIndex = 3
			if (column == 'close') columnIndex = 4
			if (column == 'volume') columnIndex = 5
			this.chainSet = this.chainSet.sort((a, b) => {
				if (order == 'ascending') {
					return a[columnIndex] - b[columnIndex]
				} else {
					return b[columnIndex] - a[columnIndex]
				}
			})
		} else {
			this.chainSet = this.chainSet.sort((a, b) => {
				if (order == 'ascending') {
					return a - b
				} else {
					return b - a
				}
			})
		}

		return this
	}

	/**
	 * @summary Usually called at the end of a chain method
	 * @returns {array[]} The Monkey chain set that was worked with
	 */
	fetch() {
		return this.chainSet
	}

	/**
	 * @summary Starts the initial data feed for the chain methods
	 * @returns {object} MonkeySet class reference
	 */
	get(selector, ...args) {
		this.chainSet = []

		if (selector == 'sets') {
			// Selecting sets: [[1,2,3,4,5,6], [1,2,3,4,5,6]]
			for (let i = 0; i < this.sets.time.length; i++) {
				this.chainSet[i] = [this.sets.time[i], this.sets.open[i], this.sets.high[i], this.sets.low[i], this.sets.close[i], this.sets.volume[i]]
			}
		} else if (selector == 'set') {
			// Selecting set: [[1,2,3,4,5,6]]
			this.chainSet[0] = [this.sets.time[i], this.sets.open[i], this.sets.high[i], this.sets.low[i], this.sets.close[i], this.sets.volume[i]]
		} else if (selector == 'column') {
			// Selecting column: [[1]]
			if (args.length != 1) {
				throw new Error(`you need to specify 1 argument for the ${selector} selector`)
			}
			this.chainSet = this[args[0]]
		} else {
			throw new Error(`${selector} is not a valid selector for select`)
		}
		return this
	}
}

module.exports = Select
