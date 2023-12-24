const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const { Class } = require('../models/ClassModel'); 


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

beforeEach(async () => {
  await Class.deleteMany({});
});

describe('Class Model', () => {
  test('should create a new class', async () => {
    const classData = {
      Classname: 'Yoga Class',
      description: 'A relaxing yoga class',
      username: new mongoose.Types.ObjectId(),
    };

    const newClass = new Class(classData);
    await newClass.save();

    const foundClass = await Class.findOne({ Classname: 'Yoga Class' });

    expect(foundClass).toBeDefined();
    expect(foundClass.Classname).toBe('Yoga Class');
    expect(foundClass.description).toBe('A relaxing yoga class');
    expect(foundClass.username).toEqual(classData.username);
  });

  
});
