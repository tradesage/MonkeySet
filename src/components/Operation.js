const component = require('../classes/component')

class Operation extends component {
  /**
   * @hideconstructor
   * @summary For doing operations on data from a MonkeySet
   * @augments component
   * @memberof MonkeySet
   * @augments Operation
   */
  constructor(...args) {
    super(...args)
  }

  /**
   * @summary Adds OHLC data to the MonkeySet
   * @param {array[]} - A set or a array of sets
   * @returns {object} MonkeySet class reference
   * @example
   * // One add
   * monkeyset.Operation.add([1,2,3,4,5,6])
   *
   * // Multiple adds
   * monkeyset.Operation.add(
   *  [1,2,3,4,5,6],
   *  [1,2,3,4,5,6],
   *  [1,2,3,4,5,6],
   * )
   */
  add(...newSet) {
    for (let set of newSet) {
      if (set.length != 6) continue
      if (isNaN(set[0]) || isNaN(set[1]) || isNaN(set[2]) || isNaN(set[3]) || isNaN(set[4]) || isNaN(set[5])) continue
      this.monkeyset.sets.time[this.monkeyset.sets.index] = parseInt(set[0])
      this.monkeyset.sets.open[this.monkeyset.sets.index] = parseFloat(set[1])
      this.monkeyset.sets.high[this.monkeyset.sets.index] = parseFloat(set[2])
      this.monkeyset.sets.low[this.monkeyset.sets.index] = parseFloat(set[3])
      this.monkeyset.sets.close[this.monkeyset.sets.index] = parseFloat(set[4])
      this.monkeyset.sets.volume[this.monkeyset.sets.index] = parseFloat(set[5])
      this.monkeyset.sets.index++
    }

    return this.monkeyset
  }

  /**
   * @summary clears a MonkeySet object, destroying all data.
   * @example
   * monkeyset.Operation.clear()
   *
   * @returns {object} MonkeySet class reference
   */
  clear() {
    this.monkeyset.sets.time = []
    this.monkeyset.sets.open = []
    this.monkeyset.sets.high = []
    this.monkeyset.sets.low = []
    this.monkeyset.sets.close = []
    this.monkeyset.sets.volume = []
    this.monkeyset.sets.index = 0

    return this.monkeyset
  }
}

module.exports = Operation
