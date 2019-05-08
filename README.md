![MonkeySet Logo](https://i.imgur.com/xulpNjs.png)

### *Designed for handling big amounts of data from the financial markets, capable of importing, exporting and analyzing your data in all kinds of ways*

## Features
 - Chain style based queries
 - Low memory footprint
 - Max Performance (3,582 adds per ms, 5,714 lookups per ms for 10,000,000 sets)
 - Capable of technical analyse of candles (trend analyse, machine learning pattern detections)
 - Technical indicators (RSI, SMA, etc)

## Example

 ```javascript
const MonkeySet = require('monkeyset')
const monkeyset = new MonkeySet([
  [new Date(), 120, 125, 130, 100, 20356],
  [new Date(), 125, 127, 139, 105, 21252],
  [new Date(), 115, 117, 119, 105, 21352],
  [new Date(), 115, 117, 119, 105, 21552],
])

console.log(monkeyset.rows().fetch())
console.log(monkeyset.rows().sort().fetch())
console.log(monkeyset.rows().sort('descending').fetch())
console.log(monkeyset.rows().first(3).fetch())
console.log(monkeyset.rows().last().fetch())
console.log(monkeyset.row('time').last(3).fetch())
console.log(monkeyset.row('time').last(3).sort('ascending').fetch())

monkeyset.add([new Date(), 125, 127, 139, 105, 21252])
monkeyset.rows().file('myfile').save('C:/inthisfolder'))


const newMonkeyset = new MonkeySet()
newMonkeyset.file('myfile').load('C:/inthisfolder')
console.log(newMonkeyset.rows().fetch())
```
