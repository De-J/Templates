import { Request, Response } from "express";
import collection from "../mongo";  

export const fetchList = async (req: Request , res: Response) => {
    try {
        const docs = await collection.find({}).toArray();
        res.status(200).send(docs);
    }
    catch (err) {
        console.error(err);
        res.status(500).send("cannot create list item")
    }
}