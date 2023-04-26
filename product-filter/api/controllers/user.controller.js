import User from "../models/user.model.js";

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
                query[key] = { $regex : params[key] }  
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

export const query1 = async (req, res) {
    try{
        const { cars, max } = req.query
        let list = []
        cars.split(",").forEach(ele => {
            list.push({ cars: ele})
        });
        const query = {}
        query["$or"] = list;
        query.income = { $lte: parseFloat(max) }
        console.log(query);
    }
    catch(err) {
        res.status(500).send()
        console.log(err);
        
    }
}