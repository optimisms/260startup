const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('testDB');
const collection = db.collection('testCollection');

(async function testConnection() {
  await client.connect();
  await db.command({ ping: 1 });
  console.log("Connected successfully to DB server");
})().catch((ex) => {
  console.log(`Unable to connect to database with ${url} because ${ex.message}`);
  process.exit(1);
});

async function populateDummyData() {
    let history = [
        { date: '2023-05-29', vaccines: ['Rabies'], petName: 'Winston' },
        { date: '2022-12-18', vaccines: ['Distemper'], petName: 'Max, Shazam' },
        { date: '2022-09-03', vaccines: ['Distemper'], petName: 'Shazam' }
    ];
    const result = await collection.insertMany(history);
    return result;
}

async function submitNewForm(form) {
    console.log("Entered submitNewForm()");
    
    const result = await collection.insertOne(form);
    return result;
}
  
function getHistory() {
    console.log("Entered getHistory()");
}
  
  module.exports = { submitNewForm, getHistory, populateDummyData };