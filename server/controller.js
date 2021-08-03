const housesArr = require("./db.json");
let houseId = 4;

module.exports = {
    getHouses: (req, res) => {res.status(200).send(housesArr)},
    deleteHouse: (req, res) => {
        const {id} = req.params;
        let tempIndex = housesArr.findIndex(el => el.id === +id)
        housesArr.splice(tempIndex, 1)
        res.status(200).send(housesArr)
    },
    createHouse: (req, res) => {
        const {address, price, imageURL} = req.body
        housesArr.push({id: houseId, address, price: +price, imageURL})
        houseId ++
        res.status(200).send(housesArr);
    },
    updateHouse: (req, res) => {
        const {type} = req.body;
        const {id} = req.params;
        let tempIndex = housesArr.findIndex(el => el.id === +id)
        if (housesArr[tempIndex].price < 10000 && type === "minus"){
            res.status(400).send("You can't go below $0")
        } else if (type === "plus"){
            housesArr[tempIndex].price += 10000
            res.status(200).send(housesArr)
        } else if (type === "minus"){
            housesArr[tempIndex].price -= 10000
            res.status(200).send(housesArr)
        }
    }
};