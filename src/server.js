// Server configuration  in server.js


const express = require('express');

// make a server instance 
const app = express();

app.use(express.json());

app.get("/", (request, response) => {
	response.json({
		message:"Hello world"
	});
});

const { User } = require('./models/UserModel');


module.exports = {
	app
}