const express = require('express')
const actor = express.Router()
const axios = require('axios')
const cors = require('cors')


// Actor Bio Info
actor.get('/:personId', async (req, res) => {
    let response = await axios.get(`https://api.themoviedb.org/3/person/${req.params.personId}?api_key=${process.env.API_KEY}&language=en-US`)
    res.status(200).send(response.data)
})

// Actor Filmography
actor.get('/filmography/:personId', async (req, res) => {
    let response = await axios.get(`https://api.themoviedb.org/3/person/${req.params.personId}/movie_credits?api_key=${process.env.API_KEY}&language=en-US`)
    res.status(200).send(response.data)
})

module.exports = actor