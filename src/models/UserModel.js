const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    email: String,
    password: String,
    username: String,
    role: { type: mongoose.Types.ObjectId, ref: "Role" },
});

// const ModelName = mongoose.model('Name that appears in mongosh or Cloud Atlas GUI', SchemaThatModelIsBasedOn);
const User = mongoose.model("User", UserSchema);

module.exports = { User };