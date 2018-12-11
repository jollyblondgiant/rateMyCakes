const mongoose = require('mongoose')
var CakeSchema = new mongoose.Schema({
    baker: String,
    name: String,
    description: String,
    image: String,
    created_at:{type: Date, default: Date.now},
    updated_at:{type:Date, default: Date.now},
    rating: Number,
    comments: Array

})
mongoose.model('Cake', CakeSchema)