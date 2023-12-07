const { databaseConnect } = require('./database');
const mongoose = require('mongoose');

databaseConnect().then(async () => {
    
    console.log("Creating seed data!");

    const AdminProfile = mongoose.model('Admin', {
        username: String,
        email: String,
        password: String,
        isAdmin: Boolean,
    })

    // create admin user fake
    let Admin1 = new AdminProfile({
        username: "Admin1",
        email: "admin1@email.com",
        password: "AdminPassword1",
        isAdmin: true,
    })

    await Admin1.save().then(() => {
		console.log(`${Admin1.username} is in the DB`);
	});
})