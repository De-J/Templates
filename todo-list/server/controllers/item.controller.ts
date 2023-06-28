import { Request, Response } from "express";
import collection from "../mongo";

export const createListItem = async (req: Request , res: Response) => {
    try {
        
    }
    catch (err) {
        console.error(err);
        res.status(500).send("cannot create list item")
    }
}

export const updateListItem = async (req: Request , res: Response) => {
    try {

    }
    catch (err) {
        console.error(err);
        res.status(500).send("cannot create list item")
    }
}


export const deleteListItem = async (req: Request , res: Response) => {
    try {

    }
    catch (err) {
        console.error(err);
        res.status(500).send("cannot create list item")
    }
}