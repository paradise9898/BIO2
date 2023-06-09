const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Port = process.env.PORT ||3333
const path = require('path');
const XMLHttpRequest = require('xhr2')

const MessagesRoutes = require('./routes/messagesRoutes')
const MeetingsRoutes = require('./routes/meetingsRoutes')

//encoding
app.use(express.json())
app.use(express.json({extended: true}))
app.use(express.urlencoded())
app.set('view engine', 'pug')
app.use(express(__dirname + '/views'))
app.use("/public", express.static(path.join(__dirname, 'public')));


app.use('/sendmessage', MessagesRoutes)
app.use('/api', MeetingsRoutes)

app.get('/', (req, res) => {
    res.render("index")

});

app.get('/a', (req, res) => {
    res.render('schedule')
})


app.post('/api', async (req, res) => {
  const formData  = JSON.stringify( req.body);
  console.log(formData);
  const  http = new XMLHttpRequest();
  const  url = `https://rj.onrender.com/api/meetings`
  const  method = "POST";
  const  data = formData

  http.open(method, url,);
  http.setRequestHeader('Content-Type', 'application/json');
  http.onreadystatechange = function(){
    if (http.readyState === XMLHttpRequest.DONE && http.status === 201){
      console.log(JSON.parse(http.responseText));
    }
  }

  http.send(data);

  res.redirect('/thanks')


})


app.get('/thanks',(req, res)=>{
  res.render('thanks')
})

app.post('/sendmessage', async(req, res) => {
    res.send('your message has been sent')

    const formData  = JSON.stringify( req.body);
    console.log(formData);
    const  http = new XMLHttpRequest();
    const  url = `https://rj.onrender.com/sendmessage/message`
    const  method = "POST";
    const  data = formData

    http.open(method, url,);
    http.setRequestHeader('Content-Type', 'application/json');
    http.onreadystatechange = function(){
      if (http.readyState === XMLHttpRequest.DONE && http.status === 201){
        console.log(JSON.parse(http.responseText));
      }
    }

    http.send(data);
})




async function launch(){
    try {
        await mongoose.connect('mongodb+srv://bio:bio22@bio2.khybl96.mongodb.net/test')
    } catch (error) {
        console.log(error);
    }
}



launch()
app.listen(Port, (req, res) =>{
console.log(`http://localhost:${Port}`);
})



