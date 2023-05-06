import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGO_URI);

const database = client.db("ORUphone");

export const collection = database.collection("corrected_data")