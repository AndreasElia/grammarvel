const Rule = require('./Rule')

class Repeats extends Rule {
  constructor() {
    super()
  }

  process(tokenText) {
    let lastMatch = ''

    tokenText.forEach((word, index) => {
      if (word.toLowerCase() === lastMatch) {
        tokenText.splice(index, 1)
      }

      lastMatch = word.toLowerCase()
    })
  }
}

module.exports = Repeats
