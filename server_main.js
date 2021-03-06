const express = require('express');
const { listen_port } = require('./utils');
const {Server} = require('./server')
const cache = require('./server-cache');


//app and api init
const server = new Server()
const api = express();

//app and api config
server.connect();
api.use(express.json({limit: "20mb"}))
api.listen(listen_port, ()=>{console.log("server init succeeded: listening on port: " + listen_port);});

// app
server.run()

api.post('/uploadImage', (req, res)=>{
    server.uploadImage(req.body);
    res.send(res.status);
})

api.get('/fetchImage', cache(180), (req, res)=>{
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("ContentType", "application/json");
    res.send(server.getPickOfDayObj()); 
})




