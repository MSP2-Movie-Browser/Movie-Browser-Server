const express = require('express')
const review = express.Router()
const axios = require('axios')
const cors = require('cors')

// const Review = require('../models/reviews')



review.get('/:movieId', async (req, res) => {
    let response = await axios.get(`https://api.themoviedb.org/3/movie/${req.params.movieId}/reviews?api_key=${process.env.API_KEY}&language=en-US&page=1`)
    res.status(200).send(response.data)
})


// review.post('/', async (req, res) => {
//     const { content } = req.body;
    
//     const review = await new Review({
//         author: req.
//         content: req.
//     }).save();

//     await Review.findOneAndUpdate({ _id: boardId }, { $push: { lists: list._id }})

//     res.status(200).json(review);
// });




module.exports = review