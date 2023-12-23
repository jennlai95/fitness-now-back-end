require('dotenv').config();
const bcrypt = require("bcryptjs");
const mongoose = require('mongoose');
const { databaseConnect } = require('./database');
const { User } = require('./models/UserModel');
const { Class } = require('./models/ClassModel');
const { Schedule } = require('./models/ScheduleModel');
const { Booking } = require('./models/BookingModel');

// connect to database to add seed data
databaseConnect().then(async () => {
    
    console.log("Creating seed data!");

     try { 
      // Drop the existing collection if it exists
    await User.collection.drop();
  
    // create admin user fake
    let Admin1 = new User({
        username: "Admin1",
        email: "admin1@email.com",
        password: "AdminPassword1",
        isAdmin: true,
    })

    await Admin1.save().then(() => {
		console.log(`${Admin1.username} is in the DB`);
	});

    
 // user data non-admin
    const User1 = new User({
        username: "User1",
        email: "user11@email.com",
        password: "UserPassword1",
        isAdmin: false,
    });
    

    // create new class 
    const user = await User.findOne({ username: 'Admin1' });
    let Yoga = new Class({
        Classname : "Yoga",
        description:"yoga class",
        username: user._id,
    });

    await Yoga.save().then(() => {
		console.log(`${Yoga.Classname} is in the DB`);
});


    // create new booking
    let newBooking = await Booking.create({
        name: Admin1._id,
        schedule: Yoga._id,
        price: "$25",
        date: new Date("2023-12-11"),
      });

      let newBooking1 = await Booking.create({
        name: User1._id,
        schedule: Yoga._id,
        price: "$25",
        date: new Date("2023-12-11"),
      });

    

// Schedule/Booking model
    let newSchedule = new Schedule ({
        class : Yoga._id,
        time: {
            start: "16:00",
            end : "17:00"},
        date  : new Date("2023-12-11"),

    });
            await newSchedule.save();
            console.log(`${newSchedule._id} is in the DB`);

            // error message handling
 } catch (error) {
            console.error(`Error creating seed data: ${error.message}`);
} finally {
            // Close the database connection
 await mongoose.connection.close();
 }
        })
        // error message if failed to connect
        .catch((error) => {
        console.error(`Error connecting to the database: ${error.message}`);
        });

