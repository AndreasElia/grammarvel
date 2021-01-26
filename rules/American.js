const Rule = require('./Rule')
const fs = require('fs')

class American extends Rule {
  constructor() {
    super()

    const readStream = fs.createReadStream(__dirname + '/../data/replace.txt', 'utf8')

    readStream.on('data', (chunk) => {
      this.compounds = chunk
    }).on('end', () => {
      console.log(this.compounds)
    })

    console.log('Compounds Added')
  }

  description() {
    return 'American words easily confused in British English'
  }

  process(text) {
    console.log(this.compounds)
  }
}

module.exports = American
