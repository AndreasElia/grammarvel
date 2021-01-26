const American = require('./American')
const Compounds = require('./Compounds')
const Duplicates = require('./Duplicates')

class Rules {
  constructor(text) {
    text = 'nice sweater' // testing

    this.text = text

    console.log(`Input: ${this.text}`)

    this.rules = [
      new American(),
      new Compounds(),
      new Duplicates(),
    ]

    this.rules.forEach(rule => {
      rule.process(this.text)
    })
  }
}

module.exports = Rules
