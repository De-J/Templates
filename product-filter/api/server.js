import express from "express";
// import mongoose from "mongoose";
import { MongoClient } from "mongodb";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";

import userRoute from "./routes/user.route.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(cors(
    {
        origin: ["http://localhost:3000"],
        credentials: true
    },
));


app.use("/api", userRoute);

async function run() {
    try {
      const database = client.db('ORUphone');
      const movies = database.collection('corrected_data');
      // Query for a movie that has the title 'Back to the Future'
      const query = { title: 'Back to the Future' };
      const movie = await movies.findOne(query);
      console.log(movie);
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  }
  run().catch(console.dir);


// const PORT = process.env.PORT || 9000;
// mongoose
//     .connect(process.env.MONGO_URL, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//         dbName: "ORUphone"
//     })
//     .then(() => {
//         app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
//     })
//     .catch((error) => {
//         console.log(error);
//     })