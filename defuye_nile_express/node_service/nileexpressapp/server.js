const express = require('express')
const { appHandler } = require('./handlers/appHandler')
const { driverAppHandler } = require('./handlers/driverAppHandler')
const app = express()
const port = 3000

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile('public/pages/', {root: __dirname });
})

app.get('/driver-app', (req, res) => {
  res.sendFile('public/pages/driver-app-form/', {root: __dirname });
})

app.get('/general-info', (req, res) => {
  res.sendFile('public/pages/driver-app-form/generalInfo.html', {root: __dirname });
})

// using axios create api endpoint

app.post('/driver-experience', (req, res) => {
  res.sendFile('public/pages/driver-app-form/driverExperience.html', {root: __dirname });
})

app.post('/driver-vertification', (req, res) => {
  res.sendFile('public/pages/driver-app-form/driverVertification.html', {root: __dirname });
})

app.post('/employment-history', (req, res) => {
  res.sendFile('public/pages/driver-app-form/employmentHistory.html', {root: __dirname });
})
// app.post('/driver-app', appHandler); // handles form response

app.get('/coming-soon', (req, res) => {
  res.sendFile('public/pages/coming-soon.html', {root: __dirname });
})

app.get('/*', (req, res) => {
  res.sendFile('public/pages/404.html', {root: __dirname });
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
