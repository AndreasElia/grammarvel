const express = require('express')
const Rules = require('./rules/Rules')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/check/:text', function(req, res) {
  const text = req.params.text

  const rules = new Rules(text)

  res.send('check ' + text)
})

app.listen(port, () => {
  console.log(`Grammarvel listening at http://localhost:${port}`)
})
