![MonkeySet Logo](https://i.imgur.com/xulpNjs.png)

[![Build Status](https://travis-ci.org/michaeldegroot/MonkeySet.png?branch=master)](https://travis-ci.org/michaeldegroot/MonkeySet) [![Coverage Status](https://coveralls.io/repos/github/michaeldegroot/MonkeySet/badge.png?branch=master)](https://coveralls.io/github/michaeldegroot/MonkeySet?branch=master) [![Licensing](https://img.shields.io/github/license/michaeldegroot/monkeyset.png)](https://raw.githubusercontent.com/michaeldegroot/MonkeySet/master/LICENSE) [![NPM Version](https://img.shields.io/npm/v/monkeyset.png)](https://www.npmjs.com/package/monkeyset)

# MonkeySet
*Designed for handling big amounts of data from the financial markets, capable of importing, exporting and analyzing your data in all kinds of ways*

## Warning
**Warning: this project is not finished yet, do not use it in your project**

## Features
 - Chain style based queries
 - Low memory footprint
 - Max Performance (3,582 adds per ms, 5,714 lookups per ms for 10,000,000 sets)
 - Capable of technical analyse of candles (trend analyse, machine learning pattern detections, etc)
 - Technical indicators (RSI, SMA, etc)
 - Data integrity and validation (save/load HMAC, ensuring validity of sets during inserts)

## Example

 ```javascript
const MonkeySet = require('monkeyset')
// Create a Monkeyset
const monkeyset = new MonkeySet([
  // Add sets to the monkeyset
  [new Date(), 120, 125, 130, 100, 20356],

  // Data structure set:
  // [time (unix), open (float/int), high (float/int), low (float/int), close (float/int), volume (float/int)]
  [new Date(), 125, 127, 139, 105, 21252],
  [new Date(), 115, 117, 119, 105, 21352],
  [new Date(), 115, 117, 119, 105, 21552],
])

// Fetch all rows
monkeyset.rows().fetch()

// You can chain fetch rows
monkeyset.rows().sort().fetch()
monkeyset.rows().sort('descending').fetch()
monkeyset.rows().first(3).fetch()
monkeyset.rows().last().fetch()

// You can also chain fetch row
monkeyset.row('time').last(3).fetch()
monkeyset.row('time').last(3).sort('ascending').fetch()

// Add new set
monkeyset.add([new Date(), 125, 127, 139, 105, 21252])

// Or add sets
monkeyset.add([
  [new Date(), 120, 125, 130, 100, 20356],
  [new Date(), 125, 127, 139, 105, 21252],
  [new Date(), 115, 117, 119, 105, 21352],
  [new Date(), 115, 117, 119, 105, 21552],
])

// Save the whole monkeyset to file
monkeyset.rows().file('myfile').save('C:/inthisfolder')

// Or only save the last 150 results, while validating them and sorting
monkeyset.rows().last(150).sort().validate().file('myfile').save('C:/inthisfolder')

// Load the saved 'myfile'
const newMonkeyset = new MonkeySet()
newMonkeyset.file('myfile').load('C:/inthisfolder')
```
