const fs = require('fs')
const lineByLine = require('n-readlines')

class Rule {
  constructor() {
    this.data = []

    this.tokenText = undefined
  }

  description() {
    return 'Rule description goes here.'
  }

  process(tokenText) {
    this.tokenText = tokenText
  }

  getData(file) {
    const data = fs.readFileSync(`${__dirname}/../data/${file}`, 'utf8')

    return data
  }

  getSplitData(file) {
    const liner = new lineByLine(`${__dirname}/../data/${file}`)

    let line
    let lineNumber = 0

    while (line = liner.next()) {
      const lineData = line.toString('ascii')

      const parts = lineData.split('=')

      if (parts.length === 2) {
        this.data[parts[0]] = parts[1]
      }

      lineNumber++
    }

    return this.data
  }
}

module.exports = Rule
