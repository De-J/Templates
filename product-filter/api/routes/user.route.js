import express from "express";
import { getUsers, queryUsers } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/page", getUsers);
// router.get("/query", queryUsers);
router.get("/query1", )
export default router;