// this file handles the server bootup

require('dotenv').config();

const { app } = require('./server');

const { databaseConnect } = require("./database");

const PORT = process.env.PORT || 3001;  

app.listen(PORT, async () => {
    await databaseConnect();
    console.log("Server running!");
});