// import Express library and create instance of a router
const express = require('express');
const { Schedule } = require('../models/ScheduleModel');
const router = express.Router();





// CRUD: create read update and delete 


// READ
// Find ALL schedule in the DB
router.get("/all", async (request, response) => {
	// Empty object in .find() means get ALL documents
	let result = await Schedule.find({});

	response.json({
		result
	});

});

//READ
// Find one schedule by its ID
router.get("/:id", async (request, response) => {
	let result = null;

	response.json({
		 result
	});

});

// read, update and delete needs to be an admin for access
// CREATE a new Schedule  in the DB
// POST localhost:3000/users/
router.post("/", async (request, response) => {

	// Error handling via Promise.catch()
	let result = await Schedule.create(request.body).catch(error => {return error});
	

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