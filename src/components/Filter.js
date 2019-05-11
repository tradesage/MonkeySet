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
	 * @summary Starts/resets the filter chain which stores the array to work with for the chain methods
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

		// Given sets are: [[1,2,3,4,5,6], [7,8,9,10,11,12]]
		if (selector == 'sets') {
			// Sets: [[1,2,3,4,5,6], [7,8,9,10,11,12]]
			this.filterChain = this.monkeyset.sets
		} else if (selector == 'set') {
			if (args.length != 1) throw new Error(`you need to specify 1 argument for the ${selector} selector`)
			// set: [[1,2,3,4,5,6]]
			this.filterChain = [this.monkeyset.sets[args[0]]]
		} else if (selector == 'column') {
			// Column: [[1], [7]]
			if (args.length != 1) throw new Error(`you need to specify 1 argument for the ${selector} selector`)
			let columnSelector = false
			if (args[0] == 'time') columnSelector = 0
			if (args[0] == 'open') columnSelector = 1
			if (args[0] == 'high') columnSelector = 2
			if (args[0] == 'low') columnSelector = 3
			if (args[0] == 'close') columnSelector = 4
			if (args[0] == 'volume') columnSelector = 5
			if (columnSelector === false) throw new Error(`${args[0]} is not a valid column`)

			// TODO: This function is very slow, can it be optimized?
			this.filterChain = this.monkeyset.sets.map(set => {
				return set[columnSelector]
			})
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
	 * // Get only 2 last sets
	 * const sets = monkeyset.Filter.get('sets').last(2).end()
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
	 * // Get only first 2 sets
	 * const sets = monkeyset.Filter.get('sets').first(2).end()
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
	 * const sets = monkeyset.Filter.get('sets').sort('ascending', 'close').end()
	 */
	sort(order = 'ascending', column = 'time') {
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
