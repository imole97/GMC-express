const express = require('express')
const app = express()
const requestTime = require('./middleware/request')

//use request time middleware


//setting ejs view engine
app.set('view engine', 'ejs')

app.get('/', requestTime, (req, res)=>{
    res.render('index')
})

app.get('/home', (req, res)=>{
    res.render('index')
})

app.get('/services', (req, res)=>{
    res.render('services')
})

app.get('/contact', (req, res)=>{
    res.render('contact')
})



app.listen(4444)