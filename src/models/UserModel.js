const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    email: String,
    password: String,
    username: String,
    isAdmin: Boolean,
    instructor: Boolean,
});

UserSchema.pre('save', 
    async function (next) {
    const user = this;

    // Only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();

    // Generate a salt and hash the password
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);

    next();
});


// const ModelName = mongoose.model('Name that appears in mongosh or Cloud Atlas GUI', SchemaThatModelIsBasedOn);
const User = mongoose.model("User", UserSchema);

module.exports = { User };