const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('testDB');
const collection = db.collection('testCollection');

const newDB = client.db('startup');
const newCollection = newDB.collection('formHistory');

(async function testConnection() {
  await client.connect();
  await db.command({ ping: 1 });
  await newDB.command({ ping: 1 });
  console.log("Connected successfully to both DB servers");
})().catch((ex) => {
  console.log(`Unable to connect to database with ${url} because ${ex.message}`);
  process.exit(1);
});

async function submitNewForm(form) {
    console.log("Entered submitNewForm()");
    
    const result = await collection.insertOne(form);
    return result;
}
  
async function getHistory() {
    console.log("Entered getHistory()");

    const query = {};
    const options = {
        sort: { date: -1 },
    };
    const cursor = await collection.find(query, options).toArray();

    console.log(cursor);
    await newCollection.insertMany(cursor);

    return cursor;
}
  
  module.exports = { submitNewForm, getHistory };