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
   * @param {array[]} - A set or a array of sets
   * @returns {object} MonkeySet class reference
   */
  add(...newSet) {
    for (let set of newSet) {
      if (set.length != 6) continue
      this.monkeyset.time[this.monkeyset.index] = parseInt(set[0])
      this.monkeyset.open[this.monkeyset.index] = parseFloat(set[1])
      this.monkeyset.high[this.monkeyset.index] = parseFloat(set[2])
      this.monkeyset.low[this.monkeyset.index] = parseFloat(set[3])
      this.monkeyset.close[this.monkeyset.index] = parseFloat(set[4])
      this.monkeyset.volume[this.monkeyset.index] = parseFloat(set[5])
      this.monkeyset.index++
    }

    return this.monkeyset
  }

  /**
   * @summary Validates a MonkeySet
   * @example
   * monkeyset.Operation.validate()
   * // All sets are validated now
   * @returns {object} MonkeySet class reference
   */
  validate() {
    // TODO: this will not work on chain, it will work with the real data
    // this.chainSetOld = this.chainSet
    // this.chainSet = []
    // let chainIndex = 0
    // loop1: for (let set of this.chainSetOld) {
    //   if (typeof set == 'object') {
    //     loop2: for (let i = 0; i < 6; i++) {
    //       if (isNaN(set[i])) continue loop1
    //     }
    //   } else {
    //     if (isNaN(set)) continue loop1
    //   }
    //   this.chainSet[chainIndex] = set
    //   chainIndex++
    // }
    // return this
  }

  /**
   * @summary clears a MonkeySet object, destroying all data.
   * @example
   * monkeyset.Operation.clear()
   *
   * @returns {object} MonkeySet class reference
   */
  clear() {
    this.monkeyset.time = []
    this.monkeyset.open = []
    this.monkeyset.high = []
    this.monkeyset.low = []
    this.monkeyset.close = []
    this.monkeyset.volume = []
    this.monkeyset.index = []

    return this.monkeyset
  }
}

module.exports = Operation
