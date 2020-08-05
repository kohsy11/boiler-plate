const express = require('express')
const app = express()
const port = 5000
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://kohsy11:Rhtjdud11!@test.ozjhk.mongodb.net/mongoDB?retryWrites=true&w=majority',{
useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('구구구구구')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


