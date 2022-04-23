require('dotenv').config()
const express = require('express')
const axios = require('axios')
const app = express()
const cors = require('cors')
// const fetch = require('node-fetch')
// If you're here and you like writing routes, feel free to add some of your own! Get creative with what the itunes API can serve back by visiting their documentation:
// https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api/

app.use(cors())
// app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).send('Please use /album/:artistId to search for all albums by artist or /song/:albumId to search for all songs by an album id')
})

// New Releases
app.get('/movie/new_releases', async (req, res) => {
    let response = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.API_KEY}&language=en-US&page=1`)
    res.status(200).send(response.data)
})

// Movies by ID
app.get('/movie/:movieId', async (req, res) => {
    let response = await axios.get(`https://api.themoviedb.org/3/movie/${req.params.movieId}?api_key=${process.env.API_KEY}&language=en-US`)
    res.status(200).send(response.data.original_title)
})

// Popular movies
app.get('/movie/popular', async (req, res) => {
    let response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`)
    res.status(200).send(response.data)
})

// Movie reviews by ID
app.get('/movie/review/:movieId', async (req, res) => {
    let response = await axios.get(`https://api.themoviedb.org/3/movie/${req.params.movieId}/reviews?api_key=${process.env.API_KEY}&language=en-US&page=1`)
    res.status(200).send(response.data)
})

// Movie Cast and Crew
app.get('/movie/cast/:movieId', async (req, res) => {
    let response = await axios.get(`https://api.themoviedb.org/3/movie/${req.params.movieId}/credits?api_key=${process.env.API_KEY}&language=en-US&page=1`)
    res.status(200).send(response.data)
})




// https://api.themoviedb.org/3/movie/now_playing?api_key=4c97cc3a8a776b5d4bcc12724553ff30&language=en-US&page=1


// https://api.themoviedb.org/3/movie/100/reviews?api_key=4c97cc3a8a776b5d4bcc12724553ff30&language=en-US&page=1

// app.get('/song/:albumId', async (req, res) => {
//     // searches for all songs by album
//     let response = await axios.get(`https://itunes.apple.com/lookup?id=${req.params.albumId}&entity=song`)
//     res.status(200).send(response.data)
// })

app.get('*', (req, res) => {
    res.status(404).send('404: Not Found')
})

app.listen(process.env.PORT || 4000, () => console.log(`Listening on ${process.env.PORT || 4000}`))
