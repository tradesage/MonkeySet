const MonkeySet = require('./src/monkeyset')

const monkeyset = new MonkeySet()
monkeyset.Random.setsFill(200)
console.log(monkeyset)
console.log(monkeyset.Select)
