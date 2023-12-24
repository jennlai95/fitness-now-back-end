// Server configuration  in server.js

const express = require('express');

const cors = require("cors");
// make a server instance 
const app = express();

// CORS server instances;
var corsOptions = {
  origin: [
    "http://localhost:3001",
    "http://localhost:3000",
	"https://t3a2-fitness-now.netlify.app"
  ],
  optionsSuccessStatus: 200,
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'PATCH' , 'DELETE', 'OPTIONS'],

};
app.use(cors(corsOptions));
app.options('*', cors(corsOptions));

app.use(express.json());



// API response to check route  
app.get("/", (request, response) => {
	response.json({
		message:"Hello world"
	});
});


//Routes

const userController = require("./controllers/UserController");
const bookingController = require("./controllers/BookingController");
const classController = require("./controllers/ClassController");
const scheduleController = require("./controllers/ScheduleController");

app.use("/class", classController);
app.use("/users", userController );
app.use("/booking", bookingController );
app.use("/schedule", scheduleController)


// 404 error route handling
app.get("*", (request, response) => {
  response.status(404).json({
      message: "No route with that path found!"
  });
});


// export app
module.exports = {
	app
}