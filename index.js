require('dotenv').config()
const express = require('express')
const app = express() //
const port = process.env.PORT || 5000 // optional, access to env variables

const conn = require('./config/db')
conn()

const starterFruits = require("./config/seed");
const Fruit = require("./models/fruit");
const fruitRoutes = require('./routes/fruitRoutes')

app.use(express.json())
app.use('/api/fruits', fruitRoutes)

//home route
app.get('/', (req, res)=> {
  res.send('Home Page')
})

//seed route -- populate db with start data
app.get("/fruits/seed", async (req, res) => {
  try {
    await Fruit.deleteMany({});
    await Fruit.create(starterFruits);
    res.json(starterFruits);
  } catch (e) {
    console.log(`Something went wrong loading seed data: ${e.message}`);
  }
})


app.listen(port, ()=>{
  console.log(`listening on port: ${port}`)
})