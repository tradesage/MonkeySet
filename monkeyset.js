const path = require('path')
const fs = require('fs')
const crypto = require('crypto')
const zlib = require('zlib')

class MonkeySet {
  constructor(...initialSets) {
    if (!initialSets) {
      initialSets = []
    }
    this.reset()

    if (initialSets.length >= 1) {
      this.add(...initialSets)
    }
  }

  file(filename = 'monkeyset') {
    let defaultFilePath
    if (require.main === module) {
      defaultFilePath = path.resolve('../')
    } else {
      defaultFilePath = path.resolve(path.dirname(require.main.filename))
    }
    return {
      save: (cb, savePath = defaultFilePath) => {
        const saveFile = path.join(savePath + `/${filename}`)
        fs.writeFile(`${saveFile}.json`, JSON.stringify(this.export()), err => {
          const zip = zlib.createGzip()
          const read = fs.createReadStream(`${saveFile}.json`)
          const write = fs.createWriteStream(`${saveFile}.monkeyset`)
          const stream = read.pipe(zip).pipe(write)
          fs.unlink(`${saveFile}.json`, () => {})
          stream.on('finish', cb.bind(this))
        })
      },
      load: (cb, loadPath = defaultFilePath) => {
        const loadFile = path.join(loadPath + `/${filename}`)
        const fileContents = fs.createReadStream(`${loadFile}.monkeyset`)
        const writeStream = fs.createWriteStream(`${loadFile}.json`)
        const unzip = zlib.createGunzip()
        const stream = fileContents.pipe(unzip).pipe(writeStream)
        stream.on('finish', () => {
          this.import(JSON.parse(fs.readFileSync(`${loadFile}.json`)))
          fs.unlink(`${loadFile}.json`, cb.bind(this))
        })
      }
    }
  }

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

  last(amount = 1) {
    this.chainSet = this.chainSet.slice(Math.max(this.chainSet.length - amount, 1))
    return this
  }

  first(amount = 1) {
    this.chainSet = this.chainSet.slice(0, amount)
    return this
  }

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

  validate() {
    this.chainSetOld = this.chainSet
    this.chainSet = []

    let chainIndex = 0
    loop1:
    for (let set of this.chainSetOld) {
      if (typeof set == 'object') {
        if (set.length != 6) continue loop1

        loop2:
        for(let i = 0; i < 6; i++) {
          if (typeof set[i] != 'number') continue loop1
          if (isNaN(set[i])) continue loop1
          if (isFinite(set[i]) == false) continue loop1
        }
      } else {
        if (typeof set != 'number') continue loop1
        if (isNaN(set)) continue loop1
        if (isFinite(set) == false) continue loop1
      }

      this.chainSet[chainIndex] = set
      chainIndex++
    }

    return this
  }

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

  fetch() {
    return this.chainSet
  }

  rows() {
    this.chainSet = []
    for (let i = 0; i < this.time.length; i++) {
      this.chainSet[i] = [this.time[i], this.open[i], this.high[i], this.low[i], this.close[i], this.volume[i]]
    }

    return this
  }

  row(column) {
    this.chainSet = this[column]

    return this
  }

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
