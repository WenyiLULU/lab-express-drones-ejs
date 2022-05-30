// Iteration #1
const drones = [
    { name: 'Creeper XL 500', propellers: 3, maxSpeed: 12 },
    { name: 'Racer 57', propellers: 4, maxSpeed: 20 },
    { name: 'Courier 3000i', propellers: 6, maxSpeed: 18 },
  ]

require("../db")

const Drone = require("../models/Drone.model")
const mongoose = require("mongoose")

Drone.insertMany(drones)
  .then((x)=>{
      console.log("Drones inserted:", x);
  })
  .catch((err)=>{
      console.log("Errors in inserting drones:", err)
  })
  .finally(()=>{
    console.log("Every thing is OK")  
    mongoose.connection.close()
  })