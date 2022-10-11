require('dotenv').config()
const express = require('express')
const app = express()

// Heroku dynamically sets a port
// eslint-disable-next-line
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.listen(PORT, () => {
  console.log('server started on port 5000')
})

app.get('/health', (_req, res) => {
  res.send('ok')
})

app.get('/version', (_req, res) => {
  res.send('1') // change this string to ensure a new version deployed
})
