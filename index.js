require('dotenv').config()
const express = require('express')
const axios = require('axios')
const cors = require('cors')
const app = express()
const mongoose = require('mongoose')
const path = require('path')


app.use(express.static(path.join(__dirname, 'build')));
app.use(cors())
app.use(express.json())
// MIDDLEWARE
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

// app.get('/', function (req, res) {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

app.get('/', (req, res) => {
    res.status(200).send('<h1>Welcome to What the Flix!!</h1>')
})

const moviesController = require('./controllers/movies_controller')
app.use('/movie', moviesController)

const actorsController = require('./controllers/actors_controller')
app.use('/actor', actorsController)

const reviewsController = require('./controllers/reviews_controller')
app.use('/review', reviewsController)

const favoritesController = require('./controllers/favorites_controller')
app.use('/favorite', favoritesController)

app.get('*', (req, res) => {
    res.status(404).send('<h1>404: Not Found</h1>')
})

// database
mongoose.connect(`${process.env.MONGO_URI}`, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(m => console.log('db connected'))
  .catch(e => console.log(e))

app.listen(process.env.PORT || 3005, () => console.log(`Listening on ${process.env.PORT || 3005}`))
