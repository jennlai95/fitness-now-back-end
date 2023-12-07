// server configuration in server.js

const express = require('express');

// make a server instance 
const app = express();

app.get("/", (request,response) =>{
    response.json({
        message:"Hello World"
    });
});

module.exports = {
    app
}