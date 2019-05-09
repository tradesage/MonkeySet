![MonkeySet Logo](https://i.imgur.com/eganiA2.png)

[![NPM Version](https://img.shields.io/npm/v/monkeyset.svg)](https://www.npmjs.com/package/monkeyset)
[![Build Status](https://travis-ci.org/michaeldegroot/MonkeySet.png?branch=master)](https://travis-ci.org/michaeldegroot/MonkeySet)
[![Coverage Status](https://coveralls.io/repos/github/michaeldegroot/MonkeySet/badge.svg?branch=master)](https://coveralls.io/github/michaeldegroot/MonkeySet?branch=master)
[![Licensing](https://img.shields.io/github/license/michaeldegroot/monkeyset.svg)](https://raw.githubusercontent.com/michaeldegroot/MonkeySet/master/LICENSE)
[![Dependencies](https://david-dm.org/michaeldegroot/monkeyset/status.svg)](https://david-dm.org/michaeldegroot/monkeyset)
[![Dev Dependencies](https://david-dm.org/michaeldegroot/monkeyset/dev-status.svg)](https://david-dm.org/michaeldegroot/monkeyset?type=dev)
[![Commit Activity](https://img.shields.io/github/commit-activity/m/michaeldegroot/MonkeySet.svg)](https://github.com/michaeldegroot/MonkeySet/pulse/monthly)
[![Last Commit](https://img.shields.io/github/last-commit/michaeldegroot/MonkeySet.svg)](https://github.com/michaeldegroot/MonkeySet/commits/master)
[![Npm bundle size](https://img.shields.io/bundlephobia/min/monkeyset.svg)](https://www.npmjs.com/package/monkeyset)
[![Repo size](https://img.shields.io/github/repo-size/michaeldegroot/monkeyset.svg)](https://github.com/michaeldegroot/MonkeySet)
[![Downloads per week](https://img.shields.io/npm/dw/monkeyset.svg)](https://www.npmjs.com/package/monkeyset)
[![Node version](https://img.shields.io/node/v/monkeyset.svg)](https://www.npmjs.com/package/monkeyset)
[![Top language of repo](https://img.shields.io/github/languages/top/badges/shields.svg)](https://github.com/michaeldegroot/MonkeySet)
[![Help us and star this project](https://img.shields.io/github/stars/michaeldegroot/monkeyset.svg?style=social)](https://github.com/michaeldegroot/MonkeySet)

# MonkeySet
*Designed for handling big amounts of data from the financial markets, capable of importing, exporting and analyzing your data in all kinds of ways*

## Warning
**Warning: this project is not finished yet, do not use it in your project**

## Features
 - Chain style based queries
 - Low memory footprint
 - Max Performance (3,582 adds m/s, 5,714 lookups m/s for 10,000,000 sets)
 - Capable of technical analyze of candles (trend analyze, machine learning pattern detections, etc.)
 - Technical indicators (RSI, SMA, etc.)
 - Data integrity and validation (save/load HMAC, ensuring validity of sets during inserts)

## Documentation
 Check out the [docs](https://htmlpreview.github.io/?https://github.com/michaeldegroot/MonkeySet/blob/master/out/index.html) or [api](https://htmlpreview.github.io/?https://raw.githubusercontent.com/michaeldegroot/MonkeySet/master/out/MonkeySet.html)


## Getting Started

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
