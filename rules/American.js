const Rule = require('./Rule')

class American extends Rule {
  constructor() {
    super()

    this.file = 'replace.txt'

    console.log('American Added')
  }

  description() {
    return 'American words easily confused in British English'
  }

  process(text) {
    console.log(this.data)
  }
}

module.exports = American
