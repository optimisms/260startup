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

async function submitNewForm(form) {
    console.log("Entered submitNewForm()");
    const result = await collection.insertOne(form);
    return result;
}
  
function getHistory() {
    console.log("Entered getHistory()");
}
  
  module.exports = { submitNewForm, getHistory };