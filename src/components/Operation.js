const component = require('../classes/component')

/**
 * @summary For doing operations on data from a MonkeySet
 * @memberof MonkeySet
 */
class Operation extends component {
  /**
   * @hideconstructor
   */
  constructor(...args) {
    super(...args)
  }

  /**
   * @summary Adds OHLC data to the MonkeySet
   * @param {array[]} - A set or a array of sets
   * @returns {object} MonkeySet class reference
   * @fires MonkeySet#add
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
    this.monkeyset.sets.push(...newSet)
    /** @event MonkeySet#add */
    this.monkeyset.event.emit('add')

    return this.monkeyset
  }

  /**
   * @summary clears a MonkeySet object, destroying all data.
   * @fires MonkeySet#clear
   * @example
   * monkeyset.Operation.clear()
   *
   * @returns {object} MonkeySet class reference
   */
  clear() {
    this.monkeyset.sets = []
    this.monkeyset.index = 0
    /** @event MonkeySet#clear */
    this.monkeyset.event.emit('clear')

    return this.monkeyset
  }
}

module.exports = Operation
