const Rule = require('./Rule')

class American extends Rule {
  constructor() {
    super()

    this.file = 'replace.txt'

    this.data = this.getSplitData()
  }

  description() {
    return 'American words easily confused in British English'
  }

  process(text) {
    this.text = text

    let splitText = this.text.split(' ')

    splitText.forEach((word, index) => {
      const wordMatch = this.data[word.toLowerCase()]

      if (wordMatch) {
        splitText[index] = wordMatch
      }
    })

    splitText = splitText.join(' ')

    console.log(`Output: ${splitText}`)
  }
}

module.exports = American
