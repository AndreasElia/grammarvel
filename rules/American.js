const Rule = require('./Rule')

class American extends Rule {
  constructor() {
    super()

    this.file = 'replace.txt'

    this.data = this.getData()

    console.log('American Added')
  }

  description() {
    return 'American words easily confused in British English'
  }

  process(text) {
    this.text = text

    console.log(this.text)
  }
}

module.exports = American
