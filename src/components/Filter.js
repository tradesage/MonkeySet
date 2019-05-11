const component = require('../classes/component')

/**
 * @summary For selecting data from a MonkeySet
 * @memberof MonkeySet
 */
class Filter extends component {
	/**
	 * @hideconstructor
	 */
	constructor(...args) {
		super(...args)
	}

	/**
	 * @summary Starts the initial data feed for the chain methods
	 * @returns {object} MonkeySet class reference
	 * @example
	 * monkeyset = new MonkeySet([1,2,3,4,5,6], [7,8,9,10,11,12])
	 *
	 * // Get all sets
	 * const sets = monkeyset.Filter.get('sets').end()
	 *
	 * // Get a set by index
	 * const sets = monkeyset.Filter.get('set', 420).end()
	 *
	 * // Get all column values from a sets
	 * const sets = monkeyset.Filter.get('column', 'open').end()
	 */
	get(selector, ...args) {
		this.filterChain = []

		if (selector == 'setsmap') {
			// Selecting sets: [[1,2,3,4,5,6], [1,2,3,4,5,6]]
			this.filterChain = this.monkeyset.sets.time.map((v, i) => {
				return [
					v,
					this.monkeyset.sets.open[i],
					this.monkeyset.sets.high[i],
					this.monkeyset.sets.low[i],
					this.monkeyset.sets.close[i],
					this.monkeyset.sets.volume[i]
				]
			})
		} else if (selector == 'setsfor') {
			// Selecting sets: [[1,2,3,4,5,6], [1,2,3,4,5,6]]
			for (let i = 0; i < this.monkeyset.sets.time.length; i++) {
				this.filterChain[i] = [
					this.monkeyset.sets.time[i],
					this.monkeyset.sets.open[i],
					this.monkeyset.sets.high[i],
					this.monkeyset.sets.low[i],
					this.monkeyset.sets.close[i],
					this.monkeyset.sets.volume[i]
				]
			}
		} else if (selector == 'set') {
			if (args.length != 1) throw new Error(`you need to specify 1 argument for the ${selector} selector`)
			// Selecting set: [[1,2,3,4,5,6]]
			this.filterChain[0] = [
				this.monkeyset.sets.time[args[0]],
				this.monkeyset.sets.open[args[0]],
				this.monkeyset.sets.high[args[0]],
				this.monkeyset.sets.low[args[0]],
				this.monkeyset.sets.close[args[0]],
				this.monkeyset.sets.volume[args[0]]
			]
		} else if (selector == 'column') {
			// Selecting column: [[1]]
			if (args.length != 1) throw new Error(`you need to specify 1 argument for the ${selector} selector`)
			let columnSelector = false
			if (args[0] == 'time') columnSelector = true
			if (args[0] == 'open') columnSelector = true
			if (args[0] == 'high') columnSelector = true
			if (args[0] == 'low') columnSelector = true
			if (args[0] == 'close') columnSelector = true
			if (args[0] == 'volume') columnSelector = true
			if (columnSelector === false) throw new Error(`${args[0]} is not a valid column`)
			this.filterChain = this.monkeyset.sets[args[0]]
		} else {
			throw new Error(`${selector} is not a valid selector for select`)
		}

		return this
	}

	/**
	 * @summary Grabs the last amount of sets of a MonkeySet
	 * @param {number} - Amount to grab
	 * @returns {object} MonkeySet class reference
	 * @example
	 * monkeyset = new MonkeySet([1,2,3,4,5,6], [7,8,9,10,11,12])
	 *
	 * // Get only 5 last sets
	 * const sets = monkeyset.Filter.get('sets').last(5).end()
	 */
	last(amount = 1) {
		this.filterChain = this.filterChain.slice(Math.max(this.filterChain.length - amount, 1))
		return this
	}

	/**
	 * @summary Grabs the first amount of sets of a MonkeySet
	 * @param {number} - Amount to grab
	 * @returns {object} MonkeySet class reference
	 * @example
	 * monkeyset = new MonkeySet([1,2,3,4,5,6], [7,8,9,10,11,12])
	 *
	 * // Get only first 5 sets
	 * const sets = monkeyset.Filter.get('sets').first(5).end()
	 */
	first(amount = 1) {
		this.filterChain = this.filterChain.slice(0, amount)
		return this
	}

	/**
	 * @summary Sorts a MonkeySet based on order and column specified
	 * @param {string} - Order to sort by
	 * @param {string} - Column to sort on
	 * @returns {object} MonkeySet class reference
	 * @example
	 * monkeyset = new MonkeySet([1,2,3,4,5,6], [7,8,9,10,11,12])
	 *
	 * // Get all sets and sort ascending on close price
	 * const sets = monkeyset.Filter.get('sets').sort('ascneding', 'close').end()
	 */
	sort(order = 'ascending', column = 'time') {
		// We are dealing with a array in array
		if (typeof this.filterChain[0] == 'object') {
			let columnIndex = false
			if (column == 'time') columnIndex = 0
			if (column == 'open') columnIndex = 1
			if (column == 'high') columnIndex = 2
			if (column == 'low') columnIndex = 3
			if (column == 'close') columnIndex = 4
			if (column == 'volume') columnIndex = 5
			if (columnIndex === false) throw new Error(`${column} is not a valid column to sort on`)
			this.filterChain = this.filterChain.sort((a, b) => {
				if (order == 'ascending') {
					return a[columnIndex] - b[columnIndex]
				} else {
					return b[columnIndex] - a[columnIndex]
				}
			})
		} else {
			this.filterChain = this.filterChain.sort((a, b) => {
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
	 * @summary Called at the end of a filter chain to retrieve the result
	 * @returns {array[]} The filtered result of a MonkeySet
	 *
	 * TODO: would be cool if the filter chain could be
	 * calculated here, so promises are easy to implement.
	 * @example
	 * monkeyset = new MonkeySet([1,2,3,4,5,6], [7,8,9,10,11,12])
	 *
	 * // Get all sets
	 * const sets = monkeyset.Filter.get('sets').end()
	 */
	end() {
		return this.filterChain
	}
}

module.exports = Filter
