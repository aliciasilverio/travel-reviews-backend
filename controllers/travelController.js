const express = require('express');
const router = express.Router();
const Trip = require('../models/trip');

router.get('/', async (req, res) => {
  try {
    const trips = await Trip.find();
    res.send({
      success: true,
      data: trips
    })
  } catch (err) {
    res.send({
      success: false,
      data: err.message
    })
  }
})

router.post('/', async (req, res) => {
  try {
    const newTrip = await Trip.create(req.body);
    res.send({
      success: true,
      data: newTrip
    })
  } catch (err) {
    res.send({
      success: false,
      data: err.message
    })
  }
})

router.get('/:id', async (req, res) => {
  try {
    const trip = await Trip.findById(`${req.params.id}`);
    if(!trip){
      throw new Error("No item by that id here!");
    }
    res.send({
      success: true,
      data: trip
    })
  } catch (err) {
    res.send({
      success: false,
      data: err.message
    })
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const trip = await Trip.findByIdAndDelete(`${req.params.id}`);
    res.send({
      success: true,
      data: trip
    })
  } catch (err) {
    res.send({
      success: false,
      data: err.message
    })
  }
})

router.put('/:id', async (req, res) => {
  try {
    const trip = await Trip.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.send({
      success: true,
      data: trip
    })
  } catch (err) {
    res.send({
      success: false,
      data: err.message
    })
  }
})

module.exports = router;