const express = require('express');
const { status } = require('express/lib/response');
const { listen_port } = require('./utils');
const { db } = require('./mysql_driver')
const {Server} = require('./server')
var bodyParser = require('body-parser');
var moment = require('moment');
const res = require('express/lib/response');
const { json } = require('body-parser');

const DB = new db();
const server = new Server()
const api = express();

api.use(bodyParser)
api.use(bodyParser.json())
api.use(bodyParser.urlencoded({extended: true}));

server.connect();
api.listen(listen_port, ()=>{});

server.run()
// app


api.post("/upload-image", (request, response)=>{
    DB.uploadImage(request.body)
    response(response.status)
})

api.get("/fetch-image", (request, response)=>{
    response.setHeader("ContentType", "application/json");
    server.getPickOfDayObj((image)=>response.send(image)) 
})




