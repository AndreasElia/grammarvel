const fs = require('fs')

class Rule {
  constructor() {
    this.file = undefined

    this.data = []
  }

  description() {
    return 'Rule description goes here.'
  }

  process(text) {}

  getData(cb) {
    if (!this.file) {
      return cb
    }

    const readStream = fs.createReadStream(`${__dirname}/../data/${this.file}`, 'utf8')

    readStream.on('data', (chunk) => {
      this.data = chunk
    }).on('end', () => console.log('done'))
  }
}

module.exports = Rule
