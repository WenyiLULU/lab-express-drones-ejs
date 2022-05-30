// Iteration #1
const mongoose = require('mongoose')

// creat schema
const modelDrone = new mongoose.Schema({
    name: String,
    propellers: Number,
    maxSpeed: Number  
})

const Drone = mongoose.model('Drone', modelDrone)

module.exports = Drone 