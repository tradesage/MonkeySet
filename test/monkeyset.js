const assert = require('assert')
const fs = require('fs')
const MonkeySet = require('../src/monkeyset')
const zlib = require('zlib')

describe('MonkeySet', function() {
  describe('Sanity checks', function() {
    it('Valid class object structure', function() {
      const monkeyset = new MonkeySet()
      assert('time' in monkeyset)
      assert('open' in monkeyset)
      assert('high' in monkeyset)
      assert('low' in monkeyset)
      assert('close' in monkeyset)
      assert('volume' in monkeyset)
      assert('rows' in monkeyset)
      assert('index' in monkeyset)
    })
    it('Creating correct data structure', () => {
      const monkeyset = new MonkeySet([1,2,3,4,5,6])
      assert.equal(monkeyset.rows().fetch()[0][0], 1)
      assert.equal(monkeyset.rows().fetch()[0][1], 2)
      assert.equal(monkeyset.rows().fetch()[0][2], 3)
      assert.equal(monkeyset.rows().fetch()[0][3], 4)
      assert.equal(monkeyset.rows().fetch()[0][4], 5)
      assert.equal(monkeyset.rows().fetch()[0][5], 6)
    })
  })
  describe('Basic operatons', () => {
    it('Can fetch single row', () => {
      const monkeyset = new MonkeySet([1,2,3,4,5,6])
      assert.equal(monkeyset.row('time').fetch()[0], 1)
      assert.equal(monkeyset.row('open').fetch()[0], 2)
      assert.equal(monkeyset.row('high').fetch()[0], 3)
      assert.equal(monkeyset.row('low').fetch()[0], 4)
      assert.equal(monkeyset.row('close').fetch()[0], 5)
      assert.equal(monkeyset.row('volume').fetch()[0], 6)
    })
    it('Can fetch all rows', () => {
      const monkeyset = new MonkeySet([1,2,3,4,5,6], [7,8,9,10,11,12])
      assert.equal(monkeyset.rows().fetch().length, 2)
      assert.deepEqual(monkeyset.rows().fetch()[0], [1,2,3,4,5,6])
      assert.deepEqual(monkeyset.rows().fetch()[1], [7,8,9,10,11,12])
    })
    it('Can add mulitple values', () => {
      const monkeyset = new MonkeySet([1,2,3,4,5,6], [2,2,3,4,5,6])
      assert.equal(monkeyset.rows().fetch()[0][0], 1)
      assert.equal(monkeyset.rows().fetch()[1][0], 2)
    })
  })
  describe('Chaining methods', () => {
    it('Can sort chain', () => {
      const dataset = [[1,9,8,7,5,4], [3,8,7,6,4,3], [2,7,6,5,3,2]]
      const monkeyset = new MonkeySet(dataset[0], dataset[1], dataset[2])
      assert.deepEqual(monkeyset.rows().fetch(), [dataset[0], dataset[1], dataset[2]])
      assert.deepEqual(monkeyset.rows().sort('ascending', 'time').fetch(), [dataset[0], dataset[2], dataset[1]])
      assert.deepEqual(monkeyset.rows().sort('descending', 'time').fetch(), [dataset[1], dataset[2], dataset[0]])
      assert.deepEqual(monkeyset.rows().sort('descending').fetch(), [dataset[1], dataset[2], dataset[0]])

      assert.deepEqual(monkeyset.rows().sort('ascending', 'open').fetch(), [dataset[2], dataset[1], dataset[0]])
      assert.deepEqual(monkeyset.rows().sort('ascending', 'high').fetch(), [dataset[2], dataset[1], dataset[0]])
      assert.deepEqual(monkeyset.rows().sort('ascending', 'low').fetch(), [dataset[2], dataset[1], dataset[0]])
      assert.deepEqual(monkeyset.rows().sort('ascending', 'close').fetch(), [dataset[2], dataset[1], dataset[0]])
      assert.deepEqual(monkeyset.rows().sort('ascending', 'volume').fetch(), [dataset[2], dataset[1], dataset[0]])

      assert.deepEqual(monkeyset.row('time').sort('ascending').fetch(), [dataset[0][0], dataset[2][0], dataset[1][0]])
      assert.deepEqual(monkeyset.row('time').sort('descending').fetch(), [dataset[1][0], dataset[2][0], dataset[0][0]])
      assert.deepEqual(monkeyset.rows().sort().fetch(), [[1,7,6,5,3,2],[2,8,7,6,4,3],[3,9,8,7,5,4]])
    })
    it('Can first chain', () => {
      const monkeyset = new MonkeySet([1,2,3,4,5,6], [3,2,3,4,5,6], [2,2,3,4,5,6])
      assert.deepEqual(monkeyset.rows().first().fetch(), [[1,2,3,4,5,6]])
      assert.deepEqual(monkeyset.rows().first(2).fetch(), [[1,2,3,4,5,6], [3,2,3,4,5,6]])
    })
    it('Can last chain', () => {
      const monkeyset = new MonkeySet([1,2,3,4,5,6], [3,2,3,4,5,6], [2,2,3,4,5,6])
      assert.deepEqual(monkeyset.rows().last().fetch(), [[2,2,3,4,5,6]])
      assert.deepEqual(monkeyset.rows().last(2).fetch(), [[3,2,3,4,5,6], [2,2,3,4,5,6]])
    })
    it('Can validate chain', () => {
      const monkeyset = new MonkeySet(
        [1,2,3,4,5,6], // should be the only value that passed in the sets
        [Infinity,2,3,4,5,6],
        ['a',2,3,4,5,6],
        [!1,2,3,4,5,6],
        [1],
        false,
        [1,2,3,4,5,6,7,8,9,12],
        true
      )
      assert.equal(monkeyset.rows().validate().fetch().length, 1)

      const monkeyset2 = new MonkeySet(
        [1,2,3,4,5,6], // should be the only value that passed in the sets
        ['a',2,3,4,5,6], // should be the only value that passed in the sets
        [Infinity,2,3,4,5,6], // should be the only value that passed in the sets
        [NaN,2,3,4,5,6], // should be the only value that passed in the sets
      )
      assert.equal(monkeyset2.row('time').validate().fetch().length, 1)
    })
  })
  describe('File system', () => {
    it('Saving', done => {
      const monkeyset = new MonkeySet([1,2,3,4,5,6])
      monkeyset.rows().file('test').save(done)
    })
    it('Loading', done => {
      const monkeyset = new MonkeySet([1,2,3,4,5,6])
      monkeyset.rows().file('test').load(done)
    })
  })
  describe('Silly edge cases', () => {
    it('Call file without filename', done => {
      const monkeyset = new MonkeySet([1,2,3,4,5,6])
      monkeyset.rows().file().save(done)
    })
    it('Save file, tamper with data, try to load file', done => {
      const monkeyset = new MonkeySet([1,2,3,4,5,6])
      monkeyset.rows().file('testing').save(() => {
        const loadFile = './testing'
        let imported = JSON.parse(fs.readFileSync(`${loadFile}.monkeyset`))
        fs.unlinkSync(`${loadFile}.monkeyset`)

        imported.monkeyset[0][0] = 9999

        assert.throws(() => {monkeyset.import(imported)}, Error)


        done()
      }, './')
    })
  })
})
