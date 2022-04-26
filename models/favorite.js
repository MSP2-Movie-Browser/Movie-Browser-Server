// dependencies
const mongoose = require('mongoose')

// schema
const favoriteSchema = new mongoose.Schema({
    movieTitle: {
        type: String,
        required: true,
    },
    posterImage: {
        type: String,
        default: 'http://placehold.it/500x500.png',
    }
        
});
        

// model and export
module.exports = mongoose.model('Favorite', favoriteSchema)
