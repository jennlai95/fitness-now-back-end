const { User } = require('../models/UserModel');
const mongoose = require('mongoose');


beforeAll(async () => {
    // Connect to a test database before running tests
    await mongoose.connect('mongodb://localhost:27017/test', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
});

afterAll(async () => {
    // Disconnect from the test database after all tests are done
    await mongoose.connection.close();
});