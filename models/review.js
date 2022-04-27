const mongoose = require('mongoose')

// schema
const reviewSchema = new mongoose.Schema({
    movieTitle: {
        type: String
        // required: true,
    },
    author: {
        type: String
        // required: true,
    },
    content: {
        type: String
        // required: true
    }
        
});
        

// model and export
module.exports = mongoose.model('Review', reviewSchema)