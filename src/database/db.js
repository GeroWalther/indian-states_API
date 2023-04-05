const { MongoClient } = require("mongodb");
const dotenv = require("dotenv");
dotenv.config();

const uri = process.env.MONGODB_URL;
let client;

const getDB = () => {
  if (!client) {
    console.log("Creating a new client");
    client = new MongoClient(uri);
  } else {
    console.log("Reusing the old client");
  }

  const database = client.db("states&districts");
  const states = database.collection("states");
  const districts = database.collection("districts");

  return {
    states,
    districts,
  };
};

module.exports = getDB;
