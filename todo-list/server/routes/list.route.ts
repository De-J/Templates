const express = require("express");
import {
    fetchList
} from "../controllers/list.controller";

const router = express.Router();

router.get("/fetch", fetchList);

export default router;