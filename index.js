const express = require('express')
const Rules = require('./rules/Rules')
const app = express()
const port = 3000

const rules = new Rules()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/check/:text', function(req, res) {
  // const text = req.params.text
  const text = 'nice sweater, did it it come with drapes?'

  rules.process(text)

  res.send(text)
})

app.listen(port, () => {
  console.log(`Grammarvel listening at http://localhost:${port}`)
})
