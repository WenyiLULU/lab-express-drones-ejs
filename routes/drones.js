const express = require('express');
const router = express.Router();


// require the Drone model here
const Drone = require("../models/Drone.model")

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  Drone.find()
    .then((drones)=>{
      //console.log('Get drones information:', drones)
      res.render('drones/list', {drones})
    })
    .catch(error => {console.log(error)})
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render('drones/create-form')
});

router.post('/drones/create', async (req, res, next) => {
  // Iteration #3: Add a new drone
  try{
    const newDrone = await Drone.create(req.body)
    //console.log('new drone created:', newDrone)
    res.redirect('/drones')
  }catch (err){
    console.log('something went wrong: ', err)
    res.render('drones/create-form')
  }
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  Drone.findById(req.params.id)
    .then((drone)=>{
      //console.log('Drone to edit is:', drone)
      res.render('drones/update-form', {drone})
    })
});

router.post('/drones/:id/edit', async (req, res, next) => {
  // Iteration #4: Update the drone
  try{
    const updateDrone = await Drone.findByIdAndUpdate(req.params.id, req.body)
    //console.log('Dron edited:', updateDrone)
    res.redirect('/drones')
  }catch (err){
    console.log('something went wrong: ', err)
    res.render('drones/update-form')
  }
});

router.post('/drones/:id/delete', async (req, res, next) => {
  // Iteration #5: Delete the drone
  await Drone.findByIdAndDelete(req.params.id)
  res.redirect('/drones')
});

module.exports = router;
