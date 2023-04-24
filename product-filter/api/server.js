import express from "express";
import mongoose from "mongoose";
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

app.use("/get", userRoute);

const PORT = process.env.PORT || 9000;
mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: "ORUphone"
    })
    .then(() => {
        app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
    })
    .catch((error) => {
        console.log(error);
    })