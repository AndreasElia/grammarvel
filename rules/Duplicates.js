const Rule = require('./Rule')

class Duplicates extends Rule {
  constructor() {
    super()

    console.log('Duplicates Added')
  }

  process(text) {
    console.log('todo d')
  }
}

module.exports = Duplicates
