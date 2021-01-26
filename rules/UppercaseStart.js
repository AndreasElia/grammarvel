const Rule = require('./Rule')

class UppercaseStart extends Rule {
  constructor() {
    super()
  }

  process(tokenText) {
    // don't run for single word sentences
    if (tokenText.length <= 1) {
      return
    }

    // sentences should start with a capital
  }
}

module.exports = UppercaseStart
