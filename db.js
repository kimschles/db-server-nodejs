const express = require('express')
const app = express()
const port = 4000


app.get('/', (req, res) => {
    res.send(`Hello, ${req.query.name}!`)
    console.log(req.query)
})

app.listen(port, () => console.log(`App is listening on port ${port}!`))