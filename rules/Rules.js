const Compounds = require('./Compounds')
const Duplicates = require('./Duplicates')

class Rules {
  constructor(text) {
    this.text = text

    this.rules = [
      new Compounds(),
      new Duplicates(),
    ]

    this.rules.forEach(rule => {
      rule.getData(() => rule.process(this.text))
    })

    console.log('Rules Added')
  }
}

module.exports = Rules
