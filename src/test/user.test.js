const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const { User } = require('../models/UserModel');

let mongoServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();

  await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

describe('User Model', () => {
  it('should create a new user', async () => {
        // test case user data 
    const userData = {
      email: 'test@email.com',
      password: 'password1',
      username: 'testuser',
    };

    // testing if it will create a new user 
    const newUser = new User(userData);
    await newUser.save();

    const savedUser = await User.findOne({ email: 'test@email.com' });

    // saved data should match input data 
    expect(savedUser).toBeDefined();
    expect(savedUser._id).toBeDefined();
    expect(savedUser.email).toBe(userData.email);
    expect(savedUser.username).toBe(userData.username);
  });

});
