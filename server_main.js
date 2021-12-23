const express = require('express');
const { listen_port } = require('./utils');
const {Server} = require('./server')
var bodyParser = require('body-parser');
const res = require('express/lib/response');

const server = new Server()
const api = express();

api.use(bodyParser)
api.use(bodyParser.json())
api.use(bodyParser.urlencoded({extended: true}));

//server and api init
server.connect();
api.listen(listen_port, ()=>{});


// app
server.run()

api.post("/upload-image", (request, response)=>{
    DB.uploadImage(request.body)
    response(response.status)
})

api.get("/fetch-image", (request, response)=>{
    response.setHeader("ContentType", "application/json");
    //server.getPickOfDayObj((image)=>response.send(image)) 
    response.send("oscar")
})




