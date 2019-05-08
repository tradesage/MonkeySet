const assert = require('assert')
const fs = require('fs')
const MonkeySet = require('../monkeyset')
const mlog = require('mocha-logger')
const moment = require('moment')

let monkeyset
const toAdd = 1000000 * 10 // 10 million
const firstAndLastAmount = toAdd / 2

describe('MonkeySet SpeedRun Performance Test', function() {
  it(`Speedrun: Add ${toAdd.toLocaleString()} sets to a monkeyset`, function() {
    const usedstart = process.memoryUsage().heapUsed / 1024 / 1024
    this.timeout(90000)
    monkeyset = new MonkeySet()
    const startTime = moment()
    for (let i = 0; i < toAdd; i++) {
      monkeyset.add([i,1,2,3,4,5])
    }
    const diff = moment().diff(startTime)
    mlog.log(`${(Math.round(toAdd / diff)).toLocaleString() } sets added per millisecond`)
    const used = process.memoryUsage().heapUsed / 1024 / 1024 - usedstart
    mlog.log(`Adding ${toAdd.toLocaleString()} sets took ${Math.round(used * 100) / 100} MB of memory`)
  })
  it(`Speedrun: Get first ${firstAndLastAmount.toLocaleString()} of ${toAdd.toLocaleString()} monkeysets`, function() {
    console.log('\n')
    this.timeout(90000)
    const startTime = moment()
    monkeyset.rows().first(firstAndLastAmount).fetch()
    const diff = moment().diff(startTime)
    mlog.log(`${(Math.round(toAdd / diff)).toLocaleString() } first ${firstAndLastAmount.toLocaleString()} sets fetched per millisecond`)
  })
  it(`Speedrun: Sort ${toAdd.toLocaleString()} monkeysets`, function() {
    console.log('\n')
    this.timeout(90000)
    const startTime = moment()
    monkeyset.rows().sort().fetch()
    const diff = moment().diff(startTime)
    mlog.log(`${(Math.round(toAdd / diff)).toLocaleString() } sets sorted per millisecond`)
  })
  it(`Speedrun: Get last ${firstAndLastAmount.toLocaleString()} of ${toAdd.toLocaleString()} monkeysets`, function() {
    console.log('\n')
    this.timeout(90000)
    const startTime = moment()
    monkeyset.rows().last(firstAndLastAmount).fetch()
    const diff = moment().diff(startTime)
    mlog.log(`${(Math.round(toAdd / diff)).toLocaleString() } last ${firstAndLastAmount.toLocaleString()} sets fetched per millisecond`)
  })
  it(`Speedrun: Validate ${toAdd.toLocaleString()} monkeysets`, function() {
    console.log('\n')
    const usedstart = process.memoryUsage().heapUsed / 1024 / 1024
    this.timeout(90000)
    const startTime = moment()
    monkeyset.rows().validate().fetch()
    const diff = moment().diff(startTime)
    mlog.log(`${(Math.round(toAdd / diff)).toLocaleString() } sets validated per millisecond`)
    const used = process.memoryUsage().heapUsed / 1024 / 1024 - usedstart
    mlog.log(`Validating took ${Math.round(used * 100) / 100} MB of memory`)
  })
  after(function(){
    console.log('\n')
    const using = process.memoryUsage().heapUsed / 1024 / 1024
    mlog.log(`MonkeySet SpeedRun Performance Test took ${Math.round(using * 100) / 100} MB of memory`)
  });
})
