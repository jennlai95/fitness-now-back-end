require('dotenv').config();
const bcrypt = require("bcryptjs");


const mongoose = require('mongoose');
const { databaseConnect } = require('./database');
const { User } = require('./models/UserModel');
const { Class } = require('./models/ClassModel');


databaseConnect().then(async () => {
    
    console.log("Creating seed data!");

    // const AdminProfile = mongoose.model('Admin', {
    //     username: String,
    //     email: String,
    //     password: String,
    //     isAdmin: Boolean,
    // })

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

    // create new class 
    let Yoga = new Class({
        Classname : "Yoga",
        description:"yoga class",
        admin: "Admin1",
    });

    await Yoga.save().then(() => {
		console.log(`${Yoga.Classname} is in the DB`);
});


// Schedule/Booking model
    let newSchedule = new Schedule ({
        class : Class._id,
        time : "1600-1700",
        Date  : "11/12/2023"

    });
    await Schedule.save().then(() => {
		console.log(`${Schedule._id} is in the DB`);
       

  
 
});
})