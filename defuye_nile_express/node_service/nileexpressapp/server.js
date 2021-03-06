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
app.get('/driver-experience', (req, res) => {
  res.sendFile('public/pages/driver-app-form/driverExperience.html', {root: __dirname });
})

app.post('/driver-experience', (req, res) => {
  res.sendFile('public/pages/driver-app-form/driverExperience.html', {root: __dirname });
})

app.post('/driver-verification', (req, res) => {
  res.sendFile('public/pages/driver-app-form/driverVerification.html', {root: __dirname });
})

app.post('/employment-history', (req, res) => {
  res.sendFile('public/pages/driver-app-form/employmentHistory.html', {root: __dirname });
})
// app.post('/driver-app', appHandler); // handles form response

app.post('/on-duty', (req, res) => {
  res.sendFile('public/pages/driver-app-form/onDutyHoursStatement.html', {root: __dirname });
})

app.post('/safety-performance', (req, res) => {
  res.sendFile('public/pages/driver-app-form/safetyPerformance.html', {root: __dirname });
})

app.post('/additional-comments', (req, res) => {
  res.sendFile('public/pages/driver-app-form/additionalComments.html', {root: __dirname });
})

app.post('/coming-soon', (req, res) => {
  res.sendFile('public/pages/coming-soon.html', {root: __dirname });
})

app.get('/*', (req, res) => {
  res.sendFile('public/pages/404.html', {root: __dirname });
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
