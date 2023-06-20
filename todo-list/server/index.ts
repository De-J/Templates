const cors = require("cors");
const dotenv = require("dotenv");
const express = require("express");

import itemRoute from "./routes/item.route";


dotenv.config();
const app = express();

app.use(cors(
    {
        origin: "http://localhost:3000",
        credentials: true
    }   
))

app.use("/item", itemRoute);

app.listen(3001, () => {
    console.log("Server running at 3001")
})