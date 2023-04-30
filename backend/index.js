const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Port = process.env.PORT ||3333
const path = require('path');

//encoding
app.use(express.json())
app.use(express.json({extended: true}))
app.use(express.urlencoded())
app.set('view engine', 'pug')
app.use(express(__dirname + '/views'))
app.use("/public", express.static(path.join(__dirname, 'public')));



app.get('/', (req, res) => {
    res.render("index")

});


app.listen(Port)
console.log(`http://localhost:${Port}`);

