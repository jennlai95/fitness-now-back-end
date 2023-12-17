const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');

async function comparePassword(plaintextPassword, hashedPassword) {
    let doesPasswordMatch = false;

    doesPasswordMatch = await bcrypt.compare(plaintextPassword, hashedPassword);

    return doesPasswordMatch;

}

function generateJwt(userId){

	let newJwt = jwt.sign(
		// Payload
		{userId}, 

		// Secret key for server-only verification
		process.env.JWT_KEY,

		// Options
		{
			expiresIn: "7d"
		}

	);

	// let newJwt = jwt.sign(
	// 	{userId}, 
	// 	"insert secret key here",
	// 	{
	// 		expiresIn: "7d"
	// 	}
	// )

	return newJwt;
}

async function hashPassword(password) {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
}


module.exports = {
	comparePassword, generateJwt, hashPassword
}