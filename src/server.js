// Server configuration  in server.js


const express = require('express');

// CORS server instances;

const cors = require("cors");
var corsOptions = {
  origin: [
    "http://localhost:3001",
    "http://localhost:3000",
	"https://t3a2-fitness-now.netlify.app"
  ],

  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

// make a server instance 
const app = express();

app.use(express.json());



// API response 
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



module.exports = {
	app
}