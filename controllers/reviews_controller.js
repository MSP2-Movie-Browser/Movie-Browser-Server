const express = require('express')
const review = express.Router()
const axios = require('axios')
const cors = require('cors')
const app = express()
const Review = require('../models/review')

app.use(express.json())

review.get('/:movieId', async (req, res) => {
    let response = await axios.get(`https://api.themoviedb.org/3/movie/${req.params.movieId}/reviews?api_key=${process.env.API_KEY}&language=en-US&page=1`)
    res.status(200).send(response.data)
})


review.post('/', (req, res) => {
    const { movieTitle, author, content }  = req.body;
    
    const addReview = new Review({
        movieTitle,
        author,
        content
    }).save();
    // console.log(req.body);
    res.status(200).send(req.body)
});

review.put('/', (req, res) => {
    const { movieTitle, author, content }  = req.body;
    
    const addReview = new Review({
        movieTitle,
        author,
        content
    }).save();
    // console.log(req.body);
    res.status(200).send(req.body)
});




module.exports = review