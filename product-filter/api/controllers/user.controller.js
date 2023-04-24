import User from "../models/user.model.js";

export const getUsers = async (req, res) => {
    try {
        const query = {}
        // query[key] = ele; // need to set query dynamically
        const records = await User.find(query);
        // console.log(records);
        res.status(200).send(records);
    }
    catch (err) {
        console.log(err);
    }
}