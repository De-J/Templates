const express = require("express");
const { 
    createListItem, 
    updateListItem,
    deleteListItem
} = require("../controllers/item.controller")

const router = express.Router();

router.post("/create", createListItem);
router.put("/update", updateListItem);
router.delete("/delete", deleteListItem);

export default router;