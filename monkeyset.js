const path = require('path')
const fs = require('fs')
const crypto = require('crypto')

class MonkeySet {
  /**
    * @summary Represents a MonkeySet containing sets.
    * @param {array} sets - Initial sets to add to the MonkeySet
    * @constructor
  */
  constructor(...initialSets) {
    this.reset()

    this.defaultFilePath = path.resolve('../')
    if (require.main !== module) {
      this.defaultFilePath = path.resolve(path.dirname(require.main.filename))
    }

    if (initialSets.length >= 1) {
      this.add(...initialSets)
    }
  }

  /**
    * @summary Set a filename to work with
    * @param {string} - filename
    * @returns {class} MonkeySet class
  */
  file(filename = 'monkeyset') {
    this.filename = filename
    return this
  }


  /**
    * @summary Saves a MonkeySet to filename
    * @param {callback} - callback
    * @param {string} - Folder to save to
  */
  save (cb, savePath = this.defaultFilePath) {
    const saveFile = path.join(savePath + `/${this.filename}`)
    fs.writeFile(`${saveFile}.monkeyset`, JSON.stringify(this.export()), err => {
      cb()
    })
  }

  /**
    * @summary Loads a MonkeySet from filename
    * @param {callback} - callback
    * @param {string} - Folder to load from
  */
  load (cb, loadPath = this.defaultFilePath) {
    const loadFile = path.join(loadPath + `/${this.filename}`)
    this.import(JSON.parse(fs.readFileSync(`${loadFile}.monkeyset`)))
    cb()
  }

  /**
    * @summary Exports a MonkeySet data format
    * @param {callback} - callback
    * @param {string} - Folder to save to
    * @returns {object} MonkeySet data format export object
  */
  export() {
    this.validate()
    const monkeyset = this.chainSet
    const created = + new Date()

    const contents = {
      created,
      monkeyset,
    }
    const signature = crypto.createHmac('sha256', created.toString().toString()).update(JSON.stringify(contents)).digest('hex')
    contents.signature = signature
    return contents
  }

  /**
    * @summary Imports a exported MonkeySet data format
    * @param {data} - MonkeySet data format to import
    * @returns {boolean} returns true if success
  */
  import(data) {
    const contents = {
      created: data.created,
      monkeyset: data.monkeyset,
    }
    const signature = crypto.createHmac('sha256', data.created.toString()).update(JSON.stringify(contents)).digest('hex')
    if (signature != data.signature) {
      throw new Error('HMAC not verified for this import, monkeyset file has been tampered with')
    }
    this.add(...contents.monkeyset)
    return true
  }

  /**
    * @summary Grabs the last amount of sets of a MonkeySet
    * @param {number} - Amount to grab
    * @returns {class} MonkeySet class
  */
  last(amount = 1) {
    this.chainSet = this.chainSet.slice(Math.max(this.chainSet.length - amount, 1))
    return this
  }

  /**
    * @summary Grabs the first amount of sets of a MonkeySet
    * @param {number} - Amount to grab
    * @returns {class} MonkeySet class
  */
  first(amount = 1) {
    this.chainSet = this.chainSet.slice(0, amount)
    return this
  }

  /**
    * @summary Sorts a MonkeySet based on order and column specified
    * @param {string} - Order to sort by
    * @param {string} - Column to sort on
    * @returns {class} MonkeySet class
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
        }
        if (order == 'descending') {
          return b[columnIndex] - a[columnIndex]
        }
      })
    } else {
      this.chainSet = this.chainSet.sort((a, b) => {
        if (order == 'ascending') {
            return a - b
        }
        if (order == 'descending') {
          return b - a
        }
      })
    }

    return this
  }

  /**
    * @summary Validates a MonkeySet
    * @returns {class} MonkeySet class
  */
  validate() {
    this.chainSetOld = this.chainSet
    this.chainSet = []

    let chainIndex = 0
    loop1:
    for (let set of this.chainSetOld) {
      if (typeof set == 'object') {
        loop2:
        for(let i = 0; i < 6; i++) {
          if (isNaN(set[i])) continue loop1
        }
      } else {
        if (isNaN(set)) continue loop1
      }

      this.chainSet[chainIndex] = set
      chainIndex++
    }

    return this
  }

  /**
    * @summary Resets a MonkeySet object, clearing all data.
    * @returns {class} MonkeySet class
  */
  reset() {
    this.time = []
    this.open = []
    this.high = []
    this.low = []
    this.close = []
    this.volume = []
    this.index = 0

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
    * @summary Starts the initial data feed for the chain methods, this gets sets as a whole
    * @returns {class} MonkeySet class
  */
  rows() {
    this.chainSet = []
    for (let i = 0; i < this.time.length; i++) {
      this.chainSet[i] = [this.time[i], this.open[i], this.high[i], this.low[i], this.close[i], this.volume[i]]
    }

    return this
  }


  /**
    * @summary Starts the initial data feed for the chain methods, this gets sets as a whole
    * @param {string} - Column name to grab
    * @returns {class} MonkeySet class
  */
  row(column) {
    this.chainSet = this[column]

    return this
  }

  /**
    * @summary Starts the initial data feed for the chain methods, this gets sets as a whole
    * @param {array[]} - A set or a array of sets
  */
  add(...newSet) {
    for (let set of newSet) {
      if (set.length != 6) continue
      this.time[this.index] = parseInt(set[0])
      this.open[this.index] = parseFloat(set[1])
      this.high[this.index] = parseFloat(set[2])
      this.low[this.index] = parseFloat(set[3])
      this.close[this.index] = parseFloat(set[4])
      this.volume[this.index] = parseFloat(set[5])
      this.index++
    }
  }
}

module.exports = MonkeySet
