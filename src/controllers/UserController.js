// import Express library and create instance of a router
const express = require('express');
const { User } = require('../models/UserModel');
const router = express.Router();



// user needs to be an admin for access


// CRUD: create read update and deletre 


// READ
// Find ALL USERS in the DB
router.get("/all", async (request, response) => {
	// Empty object in .find() means get ALL documents
	let result = await User.find({});

	response.json({
		users: result
	});

});

//READ
// Find one user by its ID
router.get("/one/id/:username", async (request, response) => {
	let result = null;

	response.json({
		User: result
	});

});

// CREATE a new User  in the DB
// POST localhost:3000/users/
router.post("/", async (request, response) => {

	// Error handling via Promise.catch()
	let result = await User.create(request.body).catch(error => {return error});
	

	response.json({
		user: result
	});

});

// UPDATE an existing user in DB 
// patch modidies whatever properties is provided and doesn't overwrite or remove any unmentioned properties
router.patch("/:username", async (request, response) => {
	let result = null;

	response.json({
		user: result
	});

});


// DELETE an existing user in DB
router.delete("/:username", async (request, response) => {
	let result = null;

	response.json({
		user: result
	});

});


module.exports = router;