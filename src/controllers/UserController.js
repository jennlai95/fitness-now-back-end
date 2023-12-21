// import Express library and create instance of a router
const express = require('express');
const { User } = require('../models/UserModel');
const { comparePassword, generateJwt } = require('../functions/userAuthFunctions');
const router = express.Router();



// user needs to be an admin for access


// CRUD: create read update and deletre 


// READ
// Find ALL USERS in the DB
router.get("/all", async (request, response) => {
	// Empty object in .find() means get ALL documents
	let result = await User.find({});

	response.json({Users: result});

});

//READ
// Find one user by its ID
router.get("/one/id/:username", async (request, response) => {
	let result = await User.findOne({_id: request.params.id});

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

// POST localhost:3000/users/login
// request.body = {username: "admin", password: "Password1"}
// respond with {jwt: "laskdnalksfdnal;fgvkmsngb;sklnmb", valid: true}
router.post("/login", async (request, response) => {
	// Find user by provided username 
	let targetUser = await User.findOne({username: request.body.username}).catch(error => error);

	// Check if user provided the correct password
	let isPasswordCorrect = await comparePassword(request.body.password, targetUser.password);

	if (!isPasswordCorrect){
		response.status(403).json({error:"You are not authorised to do this!"});
	}

	// If they provided the correct, generate a JWT
	let freshJwt = generateJwt(targetUser._id.toString());

	// respond with the JWT 
	response.json({
		jwt: freshJwt
	});

});

// UPDATE an existing user in DB 
// patch modidies whatever properties is provided and doesn't overwrite or remove any unmentioned properties
router.patch("/:username", async (request, response) => {
	let result = User.findByIdAndUpdate(request.params.id).catch(error => error);

	response.json({
		user: result
	});

});


// DELETE an existing user in DB
router.delete("/:username", async (request, response) => {
	let result = User.findByIdAndDelete(request.params.id).catch(error => error);

	response.json({
		user: result
	});

});

// GET localhost:3001/users/verify
router.get("/verify", async (request, response) => {

})

// GET localhost:3000/users/regenerate
router.get("/regenerate", async (request, response) => {

})


module.exports = router;