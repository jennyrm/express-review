const express = require('express')
const app = express()
const path = require('path')
const controllers = require('./controllers')
const port = 3003;

app.use(express.json())
app.use(express.static(path.join(__dirname, '../client/dist')))

app.get('/restaurants', controllers.getAll)
//will populate in req.params.id
app.get('/restaurants/:id', controllers.getOne)
app.post('/restaurants', controllers.postOne)
app.delete('/restaurants/:id', controllers.deleteOne)

app.listen(port, () => {
    console.log(`Your express server is live on ${port}`)
})

//morgan logs meta data about the console youre running
//parser returns middleware that only parses json