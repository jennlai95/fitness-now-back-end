// Import and configure dotenv
require("dotenv").config();

// Import Mongoose
const mongoose = require("mongoose");

const { databaseConnect } = require("./database");


// drop database 
databaseConnect().then(async ()=> {
    if (process.env.WIPE == "true") {
        console.log("Dropping database...");
        await mongoose.connection.db.dropDatabase();
        console.log("Database has been wiped!");
    }
}).then(() => {
    mongoose.connection.close();
    console.log("Database connection closed.");
}).catch((error) => console.log("An error occurred:\n" + error));