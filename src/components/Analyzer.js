const component = require('../classes/component')
const fs = require('fs')
const path = require('path')

/**
 * @summary General analyzer component for composing interesting analyzes from a MonkeySet
 * @memberof MonkeySet
 */
class Analyzer extends component {
	/**
	 * @hideconstructor
	 */
	constructor(...args) {
		super(...args)

		// Load analyzers
		this.analysers = {}
		const files = fs.readdirSync(path.join(this.monkeyset.projectRoot, 'src', 'libs', 'analyzers')).filter(item => {
			return item.slice(-3, item.length) == '.js'
		})

		// Load components
		for (let file of files) {
			file = file.replace(file.slice(-3, file.length), '')
			const module = require(path.join(this.monkeyset.projectRoot, 'src', 'libs', 'analyzers', file))
			this[file] = module
		}
	}
}

module.exports = Analyzer
