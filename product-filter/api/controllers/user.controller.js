import User from "../models/user.model.js";
import { destructure } from "../utils/utilities.js";
import { collection } from "../utils/mongo.js";

export const getUsers = async (req, res) => {
    try {
        const { start, end } = req.query;
        const query = { id: { $gt: start, $lte: end } }
        const arr = await User.find(query);
        // console.log(arr);
        res.status(200).send(arr);
    }
    catch (err) {
        res.status(500).send()
        console.log(err);
    }

}


export const queryUsers = async (req, res) => {
    try {
        const { id, min, max, phone_price, ...params } = req.query;
        const query = {}
        for (let key in params) {
            if (params[key] !== '')
                query[key] = { $regex: params[key] }
        }
        (min != '') && (query.income = { $gte: parseFloat(min) })


        console.log(query);
        const arr = await User.find(query);
        // console.log(arr);

        res.status(200).send(arr);
    }
    catch (err) {
        res.status(500).send();
        console.log(err)
    }
}


export const query1 = async (req, res) => {
    try {
        // const query = { $text: { $search: req.query.car } };
        // query.income = { $lt: parseFloat(req.query.i_max) }
        const pipeline = []

        const cursor = collection.aggregate(pipeline);
        const arr = await cursor.toArray();
        res.status(200).send(arr);
    }
    catch (err) {
        res.status(500).send()
        console.log(err);
    }
}


export const query2 = async (req, res) => {
    try {
        const key = Object.keys(req.query)[0],
            query = destructure(key, req.query.gender);
        console.log(key);
        const query = {}

        query.phone_price = { $gt: parseFloat(req.query.p_max) }
        const arr = await User.find(query)
        res.status(200).send(arr);
    }
    catch (err) {
        res.status(500).send()
        console.log(err);
    }
}


export const query3 = async (req, res) => {
    try {
        const key = Object.keys(req.query)[0];
        console.log(key);
        // query.income = { $lte: parseFloat(max) }
        // console.log(query);
        res.status(200).send();
    }
    catch (err) {
        res.status(500).send()
        console.log(err);

    }
}

export const query4 = async (req, res) => {
    try {
        const key = Object.keys(req.query)[0],
            query = destructure(key, req.query.car, true);

        query.email = { $regex: req.query.email }
        console.log(query);
        const arr = await User.find(query)
        console.log(arr)
        res.status(200).send(arr);
    }
    catch (err) {
        res.status(500).send()
        console.log(err);

    }
}

export const query5 = async (req, res) => {
    try {
        const result = await User.distinct("city")
        console.log(result)
        // query.income = { $lte: parseFloat(max) }
        // console.log(query);
        res.status(200).send();
    }
    catch (err) {
        res.status(500).send()
        console.log(err);

    }
}