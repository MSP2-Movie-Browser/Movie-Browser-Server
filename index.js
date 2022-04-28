require('dotenv').config()
const express = require('express')
const axios = require('axios')
const cors = require('cors')
const app = express()
const mongoose = require('mongoose')



app.use(cors())
app.use(express.json())
// MIDDLEWARE
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())



app.get('/', (req, res) => {
    res.status(200).send('Please use /album/:artistId to search for all albums by artist or /song/:albumId to search for all songs by an album id')
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
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(m => console.log('db connected'))
  .catch(e => console.log(e))

app.listen(process.env.PORT || 4000, () => console.log(`Listening on ${process.env.PORT || 4000}`))
