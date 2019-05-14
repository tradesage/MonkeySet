const component = require('../classes/component')
const _ = require('lodash')

/**
 * @summary For creating random data in a MonkeySet
 * @memberof MonkeySet
 */
class Random extends component {
  /**
   * @hideconstructor
   */
  constructor(...args) {
    super(...args)
  }

  /**
   * Completely fills specified amount of sets in a MonkeySet with random fake OHLC data
   * @summary Fills a MonkeySet with fake data
   * @param {number} - Amount of sets to create randomly
   * @returns {object} MonkeySet
   * @example
   * const monkeyset = new MonkeySet()
   * monkeyset.Random.setsFill(200)
   */
  setsFill(amount) {
    const startDate = new Date()
    const baseVolume = _.random(1000, 100000)
    const basePrice = _.random(10, 10000)
    let price = basePrice
    let volume = baseVolume

    for (let i = 0; i < amount; i++) {
      const intensity = _.random(1, 9) + _.random(1, 9)
      const priceIntensity = _.random(-intensity, intensity)
      if (Boolean(Math.random() < 0.5)) {
        price += Math.random() * (30 - 30)
      } else {
        price -= Math.random() * (30 - 30)
      }
      const closeModifier = _.random(-intensity, intensity)
      const volumeModifer = _.random(-intensity, intensity)

      const open = parseFloat(price.toFixed(2))
      const close = parseFloat((price + closeModifier).toFixed(2))

      let high
      if (open >= close) {
        high = open + _.random(0, (2 * intensity) / 5)
      } else {
        high = open - _.random(0, (2 * intensity) / 5)
      }

      let low
      if (open >= close) {
        low = open - _.random(0, (2 * intensity) / 5)
      } else {
        low = open + _.random(0, (2 * intensity) / 5)
      }

      volume += parseFloat(volumeModifer)
      volume = parseFloat(parseFloat(volume).toFixed(2))
      price = close

      this.monkeyset.Operation.add([startDate.setDate(startDate.getDate() + 1), open, high, low, close, volume])
    }

    return this.monkeyset
  }
}

module.exports = Random
