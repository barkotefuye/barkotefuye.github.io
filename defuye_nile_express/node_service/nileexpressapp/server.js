const express = require('express')
const { appHandler } = require('./handlers/appHandler')
const { driverAppHandler } = require('./handlers/driverAppHandler')
const app = express()
const port = 3000

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile('public/pages/', {root: __dirname });
})

// app.get('/driver-app', (req, res) => {
//   res.sendFile('public/pages/careers-single.html', {root: __dirname });
// })

app.get('/driver-app', driverAppHandler)

app.get('/coming-soon', (req, res) => {
  res.sendFile('public/pages/coming-soon.html', {root: __dirname });
})

app.get('/*', (req, res) => {
  res.sendFile('public/pages/404.html', {root: __dirname });
})

// app.post('/driver-app', appHandler);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
