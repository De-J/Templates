import { MongoClient } from "mongodb";

const uri: string = process.env.MONGO_URI ?? "";
const dbName: string = process.env.MONGO_DATABASE ?? "";
const collectionName: string = process.env.MONGO_COLLECTION ?? "";

const connection = new MongoClient(uri);

const database = connection.db(dbName);
const collection = database.collection(collectionName);

export default collection;