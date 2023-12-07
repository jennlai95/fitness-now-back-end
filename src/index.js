// this file handles the server bootup
const { app } = require('./server');

app.listen(3000, () => {
    console.log("Server running!");
});