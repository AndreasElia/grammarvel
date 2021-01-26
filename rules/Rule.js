const fs = require('fs')
const lineByLine = require('n-readlines')

class Rule {
  constructor() {
    this.file = undefined

    this.data = []
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

  getSplitData() {
    const liner = new lineByLine(`${__dirname}/../data/${this.file}`)

    let line
    let lineNumber = 0

    while (line = liner.next()) {
      const lineData = line.toString('ascii')

      if (!lineData || lineData.charAt(0) === '#') continue

      const parts = lineData.split('=')

      // if (!parts.length !== 2) continue

      this.data[parts[0]] = parts[1]

      lineNumber++
    }

    return this.data
  }
}

module.exports = Rule
