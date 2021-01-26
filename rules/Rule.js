const fs = require('fs')

class Rule {
  constructor() {
    this.file = undefined
  }

  description() {
    return 'Rule description goes here.'
  }

  process(text) {
    //
  }

  getData() {
    const data = fs.readFileSync(`${__dirname}/../data/${this.file}`, 'utf8')

    return data
  }
}

module.exports = Rule
