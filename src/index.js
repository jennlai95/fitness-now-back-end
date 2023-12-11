// this file handles the server bootup

require('dotenv').config();

const { app } = require('./server');

const { databaseConnect } = require("./database");

app.listen(PORT, async () => {
    await databaseConnect();
    console.log("Server running!");
});