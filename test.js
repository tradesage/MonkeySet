const MonkeySet = require('./src/monkeyset')

const monkeyset = new MonkeySet()
monkeyset.Random.setsFill(1000000)
console.log(monkeyset.Filter.get('sets').end().length)
console.log(
	monkeyset.Filter.get('sets')
		.first(15)
		.end()
)

monkeyset.File.save('myfile').then(() => {
	console.log('yateet')
})
