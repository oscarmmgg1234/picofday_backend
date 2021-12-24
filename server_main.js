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

server.connect();
api.listen(listen_port, ()=>{console.log("server init succeeded: listening on port: " + listen_port);});

// app
server.run()

api.post("/uploadImage", (request, response)=>{
    DB.uploadImage(request.body);
    response(response.status);
})

api.get("/fetchImage", (request, response)=>{
    response.setHeader("ContentType", "application/json");
    server.getPickOfDayObj((image)=>response.send(image)); 
})




