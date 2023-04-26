export const destructure = (key, value, match_pattern = false) => {
    const list = [], query = {}, obj = {}
    value.split(",").forEach(ele => {
        list.push(ele);
    });
    if (match_pattern) {
        let regex = list.join("|")
        obj["$regex"] = regex;
        obj["$options"] = "i";
        query[key] = obj
    }
    else {
        obj["$in"] = list;
        query[key] = obj;
    }
    return (query);
}