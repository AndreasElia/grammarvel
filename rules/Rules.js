const American = require('./American')
const Compounds = require('./Compounds')
const Duplicates = require('./Duplicates')

class Rules {
  constructor(text) {
    text = 'nice sweater' // testing

    this.text = text

    this.rules = [
      new American(),
      new Compounds(),
      new Duplicates(),
    ]

    this.rules.forEach(rule => {
      rule.process(this.text)
    })

    console.log('Rules Added')
  }
}

module.exports = Rules
