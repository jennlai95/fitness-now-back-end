// import Express library and create instance of a router
const express = require('express');
const { Booking } = require('../models/BookingModel');
const { isAdmin, authMiddleware } = require('../middleware/authMiddleware');
const router = express.Router();





// CRUD: create read update and delete 


// READ
// Find ALL bookings in the DB  
// GET /bookings
// needs to be admin 
router.get("/admin/all", isAdmin, async (request, response) => {
	// Empty object in .find() means get ALL documents
	let result = await Booking.find({});

	response.json({
		booking: result
	});

});

// READ 
// Authenticated users can view own booking

// Find bookings for the authenticated user
router.get("/my-bookings", authMiddleware, async (request, response) => {
	try {
	  const userId = request.user._id;
	  const userBookings = await Booking.find({ user: userId });
  
	  response.json({
		bookings: userBookings
	  });
	} catch (error) {
	  response.status(500).json({ error: error.message });
	}
  });

//READ
// Find booking  by date
router.get("/admin/:date", isAdmin, async (request, response) => {
	try {
		let result = await Booking.find({ date: request.params.date});

	response.json({
		 booking: result
	});
}
catch (error) {
    response.status(500).json({ error: error.message });
  }

});

// update and delete needs to be an admin for access
// CREATE a new booking  in the DB
router.post("/", isAdmin, async (request, response) => {

	// Error handling via Promise.catch()
	let newBooking = await Booking.create(request.body).catch(error => {return error});
	

	response.json(
		 newBooking
	);

});

// UPDATE an existing schedule in DB 
// patch modidies whatever properties is provided and doesn't overwrite or remove any unmentioned properties
router.patch("/:id", isAdmin, async (request, response) => {
	let result = await Booking.findByIdAndUpdate (
		request.paramds.id,
		request.body,
		{
			returnDocument:"after",
		}
	) .catch (error => error);

	response.json({
		booking:result
	});

	response.json({
	     result
	});

});


// DELETE an existing class in DB
router.delete("/:id",isAdmin, async (request, response) => {
	try {
	let result = Booking.findByIdAndDelete(request.params.id).catch(error => error);

	response.json({
	   result
	});
} 
	catch (error) {
		response.status(500).json({ error: error.message });
	  }


});


module.exports = router;