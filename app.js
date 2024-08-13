const express = require('express')
const app = express()

// get the port from env variable
const PORT = process.env.PORT || 5001

app.use(express.static('dist'))

app.get('/version', (req, res) => {
  res.send('Deployment is now triggered only when merging PR')
})

app.get('/health', (req, res) => {
  res.send('okla')
})

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`)
})
