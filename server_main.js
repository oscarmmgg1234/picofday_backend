const express = require('express');
const { listen_port } = require('./utils');
const {Server} = require('./server')
var bodyParser = require('body-parser');

//app and api init
const server = new Server()
const api = express();

//api init config
api.use(bodyParser);
api.use(bodyParser.json());
api.use(bodyParser.urlencoded({extended: true}));

//server.connect();
api.listen(listen_port, ()=>{console.log("server init succeeded: listening on port: " + listen_port);});

// app
//server.run()

api.post('/uploadImage', (req, res)=>{
    DB.uploadImage(req.body);
    res(res.status);
})

api.get('/fetchImage', (req, res)=>{
    //response.setHeader("ContentType", "application/json");
    //server.getPickOfDayObj((image)=>response.send(image)); 
    res.send("oscar")
})




