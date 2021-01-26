// # All words must contain at least one hyphen, even if the
// # word is usually not spelled with a hyphen
// # "+" at the end of the line will turn off the suggestion that
// # uses a hyphen
// # "*" at the end of the line will only suggest hyphenated words.
// ### The following two extensions are probably irrelevant:
// # "?" at the end of the line will turn off the suggestion that
// # uses a hyphen and offers lower-cased joined suggestions.
// # "$" at the end of the line will allow the hyphenated and non-
// # hyphenated variants, but will suggest a lower-cased non-hyphenated
// # variant

const Rule = require('./Rule')
const fs = require('fs')

class Compounds extends Rule {
  constructor() {
    super()

    const readStream = fs.createReadStream(__dirname + '/../data/compounds.txt', 'utf8')

    readStream.on('data', (chunk) => {
      this.compounds = chunk
    }).on('end', () => {
      console.log(this.compounds)
    })

    console.log('Compounds Added')
  }

  description() {
    return 'Checks if hyphenated words were spelled with dashes (e.g. \'T — shirt\' instead \'T-shirt\').'
  }

  process(text) {
    console.log(this.compounds)
  }
}

module.exports = Compounds
