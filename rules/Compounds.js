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

class Compounds extends Rule {
  constructor() {
    super()

    this.description = 'Checks if hyphenated words were spelled with dashes (e.g. \'T — shirt\' instead \'T-shirt\').'

    this.data = this.getData('compounds.txt')
  }

  process(tokenText) {
    tokenText.forEach((word, index) => {
      const wordMatch = this.data[word]

      if (wordMatch) {
        tokenText[index] = wordMatch
      }
    })
  }
}

module.exports = Compounds
