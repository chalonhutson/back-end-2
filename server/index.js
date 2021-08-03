const express = require("express");
const cors = require("cors");
const ctrl = require("./controller.js")

const baseURL = `/api/houses`;

const app = express();

app.use(express.json());
app.use(cors());


app.get(baseURL, ctrl.getHouses);
app.post(baseURL, ctrl.createHouse);
app.put(`${baseURL}/:id`, ctrl.updateHouse);
app.delete(`${baseURL}/:id`, ctrl.deleteHouse);


app.listen(4004, () => console.log('Up and running, Captain!'));