// import Express library and create instance of a router
const express = require('express');
const { Class } = require('../models/ClassModel');
const router = express.Router();



// class needs to be an admin for access


// CRUD: create read update and deletre 


// READ
// Find ALL Class in the DB
router.get("class/all", async (request, response) => {
	// Empty object in .find() means get ALL documents
	let result = await Class.find({});

	response.json({
		classes: result
	});

});

//READ
// Find one user by its ID
router.get("/:id", async (request, response) => {
	let result = await Class.findOne({_id: request.params.id});


	response.json({
		class: result
	});

});

// CREATE a new Class  in the DB
// POST localhost:3000/class/
router.post("/", async (request, response) => {

	// Error handling via Promise.catch()
	let result = await Class.create(request.body).catch(error => {return error});
	

	response.json({
		class: result
	});

});

// UPDATE an existing class in DB 
// patch modidies whatever properties is provided and doesn't overwrite or remove any unmentioned properties
router.patch("/:id", async (request, response) => {
	let result = await Class.findByIdAndUpdate(
		request.params.id,
		request.body,
		{
			returnDocument: "after",
		}
		).catch(error => error);


		response.json({
	   		 class : result
		});

});


// DELETE an existing class in DB
router.delete("/:id", async (request, response) => {
	let result = Class.findByIdAndDelete(request.params.id).catch(error => error);

	response.json({
	   result
	});

});


module.exports = router;