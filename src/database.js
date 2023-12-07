const mongoose = require('mongoose');

/**
 * connect or create & connect to a database
 */
async function databaseConnect(){
    try {
        console.log("Connection to:\n" + process.env.DB_URI);
        await mongoose.connect(process.env.DB_URI);
        console.log("Database connected");
    } catch (error) {
		console.warn(`databaseConnect failed to connect to DB:\n${JSON.stringify(error)}`);
	}
}

module.exports = {
	databaseConnect
}