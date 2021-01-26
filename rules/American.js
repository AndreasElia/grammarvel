const Rule = require('./Rule')

class American extends Rule {
  constructor() {
    super()

    this.description = 'American words easily confused in British English'

    this.data = this.getSplitData('replace.txt')
  }

  process(tokenText) {
    tokenText.forEach((word, index) => {
      const wordMatch = this.data[word]

      if (wordMatch) {
        tokenText[index] = wordMatch
      }
    })
  }
}

module.exports = American
