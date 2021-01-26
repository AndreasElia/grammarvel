const natural = require('natural')
const American = require('./American')
const Compounds = require('./Compounds')
const Repeats = require('./Repeats')


class Rules {
  constructor() {
    this.rules = [
      new American(),
      new Compounds(),
      new Repeats(),
    ]

    this.tokenizer = new natural.WordPunctTokenizer()
  }

  process(text) {
    this.tokenText = this.tokenizer.tokenize(text)

    console.log(`Input: ${this.tokenText}`)

    this.rules.forEach(rule => {
      rule.process(this.tokenText)
    })

    console.log(`Output: ${this.tokenText}`)
  }
}

module.exports = Rules
