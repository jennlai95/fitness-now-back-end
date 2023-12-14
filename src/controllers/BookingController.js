// import Express library and create instance of a router
const express = require('express');
const { Booking } = require('../models/BookingModel');
const router = express.Router();





// CRUD: create read update and delete 


// READ
// Find ALL bookings in the DB  
// GET /bookings
// needs to be admin 
router.get("/all", async (request, response) => {
	// Empty object in .find() means get ALL documents
	let result = await Booking.find({});

	response.json({
		result
	});

});

//READ
// Find one booking  by its ID
router.get("id/:id", async (request, response) => {
	let result = null;

	response.json({
		 result
	});

});

// update and delete needs to be an admin for access
// CREATE a new booking  in the DB
// POST localhost:3000/users/
router.post("/", async (request, response) => {

	// Error handling via Promise.catch()
	let result = await Booking.create(request.body).catch(error => {return error});
	

	response.json({
		 result
	});

});

// UPDATE an existing schedule in DB 
// patch modidies whatever properties is provided and doesn't overwrite or remove any unmentioned properties
router.patch("/:id", async (request, response) => {
	let result = null;

	response.json({
	     result
	});

});


// DELETE an existing class in DB
router.delete("/:id", async (request, response) => {
	let result = null;

	response.json({
	   result
	});

});


module.exports = router;