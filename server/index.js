const express = require('express')
const stripe = require ('stripe')
const cors = require('cors')

const app = express()
app.listen(3001, () =>{
    console.log('servfer on port ', 3001)
})