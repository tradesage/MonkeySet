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

    this.monkeyset.chain.fetch = this.fetch
    this.monkeyset.chain.first = this.first
    this.monkeyset.chain.last = this.last
    this.monkeyset.chain.sort = this.sort
    this.monkeyset.chain.result = this.result
    this.monkeyset.chain.convert = this.convert
  }

  /**
   * @summary Grabs the last amount of sets of a MonkeySet
   * @param {number} - Amount to grab
   * @returns {object} MonkeySet class reference
   * @example
   * monkeyset = new MonkeySet([1,2,3,4,5,6], [7,8,9,10,11,12])
   *
   * // Get only 2 last sets
   * const sets = monkeyset.Filter.fetch('sets').last(2).result()
   */
  last(amount = 1) {
    this.sets = this.sets.slice(Math.max(this.sets.length - amount, 1))
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
   * const sets = monkeyset.Filter.fetch('sets').first(2).result()
   */
  first(amount = 1) {
    this.sets = this.sets.slice(0, amount)
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
   * const sets = monkeyset.Filter.fetch('sets').sort('ascending', 'close').result()
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
    this.sets = this.sets.sort((a, b) => {
      if (order == 'ascending') {
        return a[columnIndex] - b[columnIndex]
      } else {
        return b[columnIndex] - a[columnIndex]
      }
    })

    return this
  }

  convert(to) {
    if (to == 'ohlc') {
      if (this.selector == 'column' && this.dataformat)
        throw new Error(`Cannot convert ${this.dataformat} format to ohlc in a ${this.selector} fetch`)
      this.sets = {
        time: this.sets.map(set => {
          return set[0]
        }),
        open: this.sets.map(set => {
          return set[1]
        }),
        high: this.sets.map(set => {
          return set[2]
        }),
        low: this.sets.map(set => {
          return set[3]
        }),
        close: this.sets.map(set => {
          return set[4]
        }),
        volume: this.sets.map(set => {
          return set[5]
        })
      }
      this.dataformat = 'ohlc'
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
   * const sets = monkeyset.Filter.fetch('sets').result()
   */
  result() {
    return this.sets
  }
}

module.exports = Filter
