const component = require('../classes/component')
const fs = require('fs')
const path = require('path')
const crypto = require('crypto')
const readline = require('readline')

/**
 * @summary General file operations component for reading/writing MonkeySet data files
 * @memberof MonkeySet
 */
class File extends component {
	/**
	 * @hideconstructor
	 */
	constructor(...args) {
		super(...args)
	}

	/**
	 * @summary Saves a MonkeySet to filename
	 * @param {string} - File to save
	 * @fires MonkeySet#fileSave
	 * @example
	 * monkeyset = new MonkeySet([1,2,3,4,5,6])
	 *
	 * // Save the MonkeySet to file
	 * await monkeyset.File.save('./afile')
	 */
	save(saveFile = path.join(this.projectRoot, 'export.monkeyset')) {
		return new Promise((resolve, reject) => {
			const monkeysetExport = this.export()

			const stream = fs.createWriteStream(saveFile, { flags: 'w' })
			stream.write(`${monkeysetExport.created}:${monkeysetExport.signature}\n`)
			for (let set of monkeysetExport.monkeyset) {
				stream.write(`${set}\n`)
			}
			stream.close()

			stream.on('error', reject)
			stream.on('finish', () => {
				/** @event MonkeySet#fileSave */
				this.monkeyset.event.emit('fileSave')
				resolve()
			})
		})
	}

	/**
	 * @summary Loads a MonkeySet from filename
	 * @param {string} - File to load
	 * @fires MonkeySet#fileLoad
	 * @example
	 * const monkeyset = new MonkeySet()
	 * await monkeyset.File.load('./afile')
	 * // MonkeySet is now full of sets loaded from ./load.monkeyset file
	 */
	load(loadFile = path.join(this.projectRoot, 'export.monkeyset')) {
		return new Promise((resolve, reject) => {
			var instream = fs.createReadStream(loadFile)
			var rl = readline.createInterface({
				input: instream,
				terminal: false
			})

			const monkeysetData = {}
			let readHeader = true
			let monkeysetIndex = 0
			let lineIndex = 0
			rl.on('line', line => {
				if (readHeader) {
					monkeysetData.created = parseInt(line.split(':')[0])
					monkeysetData.monkeyset = []
					monkeysetData.signature = line.split(':')[1]
					readHeader = false
				} else {
					monkeysetIndex = lineIndex - 1
					monkeysetData.monkeyset[monkeysetIndex] = []
					line.split(',').forEach((set, index) => {
						monkeysetData.monkeyset[monkeysetIndex][index] = parseFloat(set)
					})
				}

				lineIndex++
			})

			rl.on('error', reject)
			rl.on('close', () => {
				this.import(monkeysetData)
				/** @event MonkeySet#fileLoad */
				this.monkeyset.event.emit('fileLoad')
				resolve()
			})
		})
	}

	/**
	 * @summary Exports a MonkeySet data format
	 * @returns {object} MonkeySet data format export object
	 * @example
	 * const monkeyset = new MonkeySet([1,2,3,4,5,6])
	 * const monkeySetExport = await monkeyset.File.export()
	 */
	export() {
		const created = +new Date()

		const contents = {
			created,
			monkeyset: this.monkeyset.Filter.get('sets').end()
		}

		return contents
	}

	/**
	 * @summary Imports a exported MonkeySet data format
	 * @param {data} - MonkeySet data format to import
	 * @throws Will reject promise with a error if .monkeyset file has been tampered with (failed HMAC authentication)
	 * @returns {boolean} returns true if success
	 * @example
	 * const monkeyset = new MonkeySet()
	 * const monkeySetExport = await monkeyset.File.export()
	 * monkeyset.File.import(monkeySetExport)
	 */
	import(data) {
		const contents = {
			created: data.created,
			monkeyset: data.monkeyset
		}
		// TODO: instead of contents hmac, create a crc32 of file
		// const signature = crypto
		// 	.createHmac('sha256', data.created.toString())
		// 	.update(JSON.stringify(contents))
		// 	.digest('hex')
		// if (signature != data.signature) {
		// 	return 'HMAC not verified for this import, monkeyset file has been tampered with'
		// }
		this.monkeyset.Operation.add(...contents.monkeyset)
		return true
	}
}

module.exports = File
