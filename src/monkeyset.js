const path = require('path')
const fs = require('fs')
const crypto = require('crypto')
const readline = require('readline')
const stream = require('stream')

class MonkeySet {
  /**
   * A MonkeySet is a class object that holds OHLC data (a set) in the most important form which is:
   *  - MonkeySet.time: (int) The time in unix timestamp when this candle was created
   *  - MonkeySet.open: (float) Opening price
   *  - MonkeySet.high: (float) Highest price
   *  - MonkeySet.low: (float) Lowest price
   *  - MonkeySet.close: (float) Closing price
   *  - MonkeySet.volume: (float) Volume
   *  - MonkeySet.index: (int) Determining index for adding new sets
   *
   * @summary Represents a MonkeySet containing sets.
   * @param {array} sets - Initial sets to add to the MonkeySet
   * @constructor
   */
  constructor(...initialSets) {
    this.reset()

    this.projectRoot = path.resolve(path.dirname(__dirname))

    if (initialSets.length >= 1) {
      this.add(...initialSets)
    }

    this.reloadComponents()
  }

  /**
   * @summary (re)loads all the components, used internally
   */
  reloadComponents() {
    // Read component files
    const files = fs.readdirSync(path.join(this.projectRoot, 'src', 'components')).filter(item => {
      return item.slice(-3, item.length) == '.js'
    })

    // Load components
    this.components = {}
    for (let file of files) {
      const module = require(path.join(this.projectRoot, 'src', 'components', file))
      this.components[module.name] = module
    }

    // Activate components
    for (let componentName in this.components) {
      this[componentName] = new this.components[componentName](this)
    }
    delete this.components

    console.log(this)
  }

  /**
   * @summary Resets a MonkeySet object, clearing all data.
   * @returns {class} MonkeySet class reference
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
   * @summary Set a filename to work with
   * @param {string} - filename
   * @returns {class} MonkeySet class reference
   */
  file(filename = 'monkeyset') {
    this.filename = filename
    return this
  }

  /**
   * @summary Saves a MonkeySet to filename
   * @param {string} - Folder to save to
   */
  save(savePath = this.projectRoot) {
    return new Promise(async (resolve, reject) => {
      const saveFile = path.join(savePath, `${this.filename}.monkeyset`)
      const monkeysetExport = await this.export()

      const stream = fs.createWriteStream(saveFile, { flags: 'w' })
      stream.write(`${monkeysetExport.created}:${monkeysetExport.signature}\n`)
      for (let set of monkeysetExport.monkeyset) {
        stream.write(`${set}\n`)
      }
      stream.close()

      stream.on('error', reject)
      stream.on('finish', resolve)
    })
  }

  /**
   * @summary Loads a MonkeySet from filename
   * @param {string} - Folder to load from
   */
  load(loadPath = this.projectRoot) {
    return new Promise((resolve, reject) => {
      const loadFile = path.join(loadPath + `/${this.filename}.monkeyset`)

      var instream = fs.createReadStream(loadFile)
      var rl = readline.createInterface({
        input: instream,
        terminal: false
      })

      const monkeysetData = {}
      let readHeader = true
      let monkeysetIndex = 0
      let lineIndex = 0
      rl.on('line', line => {
        if (readHeader) {
          monkeysetData.created = parseInt(line.split(':')[0])
          monkeysetData.monkeyset = []
          monkeysetData.signature = line.split(':')[1]
          readHeader = false
        } else {
          monkeysetIndex = lineIndex - 1
          monkeysetData.monkeyset[monkeysetIndex] = []
          line.split(',').forEach((set, index) => {
            monkeysetData.monkeyset[monkeysetIndex][index] = parseFloat(set)
          })
        }

        lineIndex++
      })

      rl.on('error', reject)
      rl.on('close', () => {
        this.import(monkeysetData)
        resolve()
      })
    })
  }

  /**
   * @summary Exports a MonkeySet data format
   * @returns {object} MonkeySet data format export object
   */
  export() {
    return new Promise((resolve, reject) => {
      this.validate()
      const monkeyset = this.chainSet
      const created = +new Date()

      const contents = {
        created,
        monkeyset
      }
      resolve(contents)
    })
  }

  /**
   * @summary Imports a exported MonkeySet data format
   * @param {data} - MonkeySet data format to import
   * @throws Will throw an error if .monkeyset file has been tampered with (failed HMAC authentication)
   * @returns {boolean} returns true if success
   */
  import(data) {
    return new Promise((resolve, reject) => {
      const contents = {
        created: data.created,
        monkeyset: data.monkeyset
      }
      // TODO: instead of contents hmac, create a crc32 of file
      // const signature = crypto.createHmac('sha256', data.created.toString()).update(JSON.stringify(contents)).digest('hex')
      // if (signature != data.signature) {
      //   return reject('HMAC not verified for this import, monkeyset file has been tampered with')
      // }
      this.add(...contents.monkeyset)
      resolve()
    })
  }

  /**
   * @summary Grabs the last amount of sets of a MonkeySet
   * @param {number} - Amount to grab
   * @returns {class} MonkeySet class reference
   */
  last(amount = 1) {
    this.chainSet = this.chainSet.slice(Math.max(this.chainSet.length - amount, 1))
    return this
  }

  /**
   * @summary Grabs the first amount of sets of a MonkeySet
   * @param {number} - Amount to grab
   * @returns {class} MonkeySet class reference
   */
  first(amount = 1) {
    this.chainSet = this.chainSet.slice(0, amount)
    return this
  }

  /**
   * @summary Sorts a MonkeySet based on order and column specified
   * @param {string} - Order to sort by
   * @param {string} - Column to sort on
   * @returns {class} MonkeySet class reference
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
   * @summary Validates a MonkeySet
   * @returns {class} MonkeySet class reference
   */
  validate() {
    this.chainSetOld = this.chainSet
    this.chainSet = []

    let chainIndex = 0
    loop1: for (let set of this.chainSetOld) {
      if (typeof set == 'object') {
        loop2: for (let i = 0; i < 6; i++) {
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
   * @summary Usually called at the end of a chain method
   * @returns {array[]} The Monkey chain set that was worked with
   */
  fetch() {
    return this.chainSet
  }

  /**
   * @summary Starts the initial data feed for the chain methods
   * @returns {class} MonkeySet class reference
   */
  select(selector, ...args) {
    this.chainSet = []

    if (selector == 'sets') {
      // Selecting sets: [[1,2,3,4,5,6], [1,2,3,4,5,6]]
      for (let i = 0; i < this.time.length; i++) {
        this.chainSet[i] = [this.time[i], this.open[i], this.high[i], this.low[i], this.close[i], this.volume[i]]
      }
    } else if (selector == 'set') {
      // Selecting set: [[1,2,3,4,5,6]]
      this.chainSet[i] = [this.time[i], this.open[i], this.high[i], this.low[i], this.close[i], this.volume[i]]
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

  /**
   * @summary Adds OHLC data to the MonkeySet
   * @param {array[]} - A set or a array of sets
   * @returns {class} MonkeySet class reference
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

    return this
  }
}

module.exports = MonkeySet
