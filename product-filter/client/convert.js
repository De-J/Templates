const fs = require('fs')

// for (let ele of data) {
    let file = fs.readFileSync("sample_data copy.json", "utf-8")
    let data = JSON.parse(file)
    for (let ele of data) {
        let str = ele.income.substr(1, ele.income.length)
        let num = parseFloat(str)
        ele.income = num
        ele.phone_price = parseInt(ele.phone_price)
    }
    console.log(data);
    let users = JSON.stringify(data)
    fs.writeFileSync("sample_data(numCopy).json", users);
// }
