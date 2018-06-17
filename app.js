const express = require('express')
const app = express()
const morgan = require('morgan')
const Router = require('./routes/routes.js')
const bodyParser = require('body-parser')

app.use(morgan((tokens, req, res) => {
  return `${tokens.method(req, res)} ${tokens.url(req, res)} ${tokens.status(req, res)} ${`${tokens['response-time'](req, res)}ms`} ${tokens.date(req, res)}`
}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/', Router)

const port = process.env.PORT || 8000
app.listen(port, () => console.log(`Server Running on port ${port}`))
