import express from "express";
import { 
    getUsers, 
    // queryUsers,
    query1,
    query2,
    query3,
    query4,
    query5, 
} from "../controllers/user.controller.js";

const router = express.Router();

router.get("/page", getUsers);
// router.get("/search", queryUsers);

router.get("/query1", query1)
router.get("/query2", query2)
router.get("/query3", query3)
router.get("/query4", query4)
router.get("/query5", query5)

export default router;