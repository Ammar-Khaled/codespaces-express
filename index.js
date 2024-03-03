const express = require('express')
const app = express()
const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.all('/', (req, res) => {
  res.send("H2O");
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
