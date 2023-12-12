// import Express library and create instance of a router
const express = require('express');
const router = express.Router();



// class needs to be an admin for access


// CRUD: create read update and deletre 


// READ
// Find ALL Class in the DB
router.get("/all", async (request, response) => {
	// Empty object in .find() means get ALL documents
	let result = await Class.find({});

	response.json({
		classes: result
	});

});

//READ
// Find one user by its ID
router.get("/:id", async (request, response) => {
	let result = null;

	response.json({
		class: result
	});

});

// CREATE a new Class  in the DB
// POST localhost:3000/users/
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
	let result = null;

	response.json({
	    class : result
	});

});


// DELETE an existing class in DB
router.delete("/:id", async (request, response) => {
	let result = null;

	response.json({
		class: result
	});

});


module.exports = router;