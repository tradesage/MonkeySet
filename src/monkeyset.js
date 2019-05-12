const path = require('path')
const fs = require('fs')
const events = require('events')

class MonkeySet {
  /**
   * A MonkeySet is a class object that holds OHLC data (a set) in the most important form which is:
   *  - MonkeySet.time: (int) The time in UNIX time stamp when this candle was created
   *  - MonkeySet.open: (float) Opening price
   *  - MonkeySet.high: (float) Highest price
   *  - MonkeySet.low: (float) Lowest price
   *  - MonkeySet.close: (float) Closing price
   *  - MonkeySet.volume: (float) Volume
   *
   * @example
   * const MonkeySet = require('monkeyset')
   * // Create only one set
   * const monkeyset = new MonkeySet([1,2,3,4,5,6])
   *
   * // Or create a monkeyset with more sets
   * const monkeyset = new MonkeySet(
   *  [1,2,3,4,5,6],
   *  [1,2,3,4,5,6],
   *  [1,2,3,4,5,6],
   * )
   *
   * @author GiveMeAllYourCats <specamps@gmail.com>
   * @summary Represents a MonkeySet containing sets.
   * @param {array[]} sets - Initial sets to add to the MonkeySet
   * @constructor
   * @class Monkeyset
   */

  // TODO: Chain variable should be global across components, return this
  // should be a return global chain set across components instead of component locally.
  // if you don't know what I mena with this.. then omg
  // EDIT: I KNOW WHAT YOU MEAN SHUT THE FUCK UP BIATCH
  constructor(...initialSets) {
    this.projectRoot = path.resolve(path.dirname(__dirname))
    this.sets = {}
    this.index = 0
    this.event = new events.EventEmitter()
    this.loadComponents()
    this.Operation.clear()

    if (initialSets.length >= 1) {
      this.Operation.add(...initialSets)
    }
  }

  /**
   * @summary Loads all the core or extended components
   * @ignore
   */
  loadComponents() {
    // Read component files
    const files = fs.readdirSync(path.join(this.projectRoot, 'src', 'components')).filter(item => {
      return item.slice(-3, item.length) == '.js'
    })

    // Load components
    for (let file of files) {
      const module = require(path.join(this.projectRoot, 'src', 'components', file))
      this[module.name] = new module(this)
    }
  }
}

module.exports = MonkeySet
