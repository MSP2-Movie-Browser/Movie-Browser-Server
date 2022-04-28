const express = require('express')
const favorite = express.Router()
const axios = require('axios')
const cors = require('cors')
const app = express()
const Favorite = require('../models/favorite')

app.use(express.json())

favorite.post('/', (req, res) => {
    const { movieTitle, posterImage }  = req.body;
    
    const addFavorite = new Favorite({
        movieTitle,
        posterImage
    }).save();
    console.log(req.body);
    res.status(200).send(req.body)
});

module.exports = favorite