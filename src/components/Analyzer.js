const component = require('../classes/component')

class Analyzer extends component {
	/**
	 * @hideconstructor
	 * @summary General analyzer component for composing interesting analyzes from a MonkeySet
	 * @augments component
	 * @memberof MonkeySet
	 * @augments Analyzer
	 */
	constructor(...args) {
		super(...args)
	}
}

module.exports = Analyzer
