const { MongoClient } = require("mongodb");

const MONGO_URI = "mongodb://127.0.0.1:27017";
const DB_NAME   = "shortlink";

let client = new MongoClient(MONGO_URI);       
async function connect() {
  if (client && client.topology?.isConnected()) return client.db(DB_NAME);
  await client.connect();
  const db = client.db(DB_NAME);
  await db.collection("shortlinks").createIndex({ short: 1 }, { unique: true });
  return db;
}

module.exports = { connect };

