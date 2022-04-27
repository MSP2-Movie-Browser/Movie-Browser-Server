const express = require('express')
const movie = express.Router()
const axios = require('axios')
const cors = require('cors')
const app = express()


app.use(cors())

// Movies by ID

// New Releases
movie.get('/new_releases', async (req, res) => {
    let response = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.API_KEY}&language=en-US&page=1`)
    res.status(200).send(response.data)
})

// Popular movies
movie.get('/popular', async (req, res) => {
    let response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`)
    res.status(200).send(response.data)
})

movie.get('/:movieId', async (req, res) => {
    let response = await axios.get(`https://api.themoviedb.org/3/movie/${req.params.movieId}?api_key=${process.env.API_KEY}&language=en-US`)
    res.status(200).send(response.data)
})

// Movie Cast and Crew
movie.get('/cast/:movieId', async (req, res) => {
    let response = await axios.get(`https://api.themoviedb.org/3/movie/${req.params.movieId}/credits?api_key=${process.env.API_KEY}&language=en-US&page=1`)
    res.status(200).send(response.data)
})



module.exports = movie