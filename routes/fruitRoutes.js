const express = require('express');
const router = express.Router();
const Fruit = require('../models/fruit');

//get all fruits
router.get('/', async (req, res) => {
  try {
    const allFruit = await Fruit.find({});
    res.json(allFruit);
  }
  catch (e) {
    res.status(500).json({errors: e.message});
  }
});

//show route - get 1 fruit
router.get('/:id', async (req, res) => {

  try {
    const singleFruit = await Fruit.findById(req.params.id);
    res.json(singleFruit);
  }
  catch (e) {
    res.status(500).json({error: e.message});
  }
});

//create new fruit
router.post('/', async (req, res) => {
  try {
    const createdFruit = await Fruit.create(req.body);
    console.log(req.body);
    res.json(createdFruit);
  }
  catch (e) {
    res.status(500).json({error: e.message});
  }
});

//update fruit
router.put('/:id', async (req,res)=>{
  try {
    const updatedFruit = await Fruit.findByIdAndUpdate(req.params.id, req.body)
    res.json(updatedFruit)
  }catch (e) {
    res.status(500).json({error: e.message})
  }
})

//delete 1 fruit
router.delete('/:id', async (req,res)=>{
  try{
    const deleteFruit = await Fruit.findByIdAndDelete(req.params.id)
    res.json(deleteFruit)
  }catch (e) {
    res.status(500).json({error: e.message})
  }
})

//delete all fruit
router.delete('/', async (req,res)=>{
  try{
    const deleteAllFruit = await Fruit.deleteMany({})
    res.json(deleteAllFruit)
  }catch (e) {
    res.status(500).json({error: e.message})
  }
})

module.exports = router;
