const express = require('express');
const { listen_port } = require('./utils');
const {Server} = require('./server')


//app and api init
const server = new Server()
const api = express();

//app and api config
server.connect();
api.listen(listen_port, ()=>{console.log("server init succeeded: listening on port: " + listen_port);});

// app
server.run()

api.post('/uploadImage', (req, res)=>{
    DB.uploadImage(req.body);
    res(res.status);
})

api.get('/fetchImage', (req, res)=>{
    res.setHeader("ContentType", "application/json");
    server.getPickOfDayObj((image)=>res.send(image)); 
})




