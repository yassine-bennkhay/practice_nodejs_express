//get products from a json file
const data = require("../json/data.json");
const getProducts = (req, res) => {
  res.status(200).json(data);
  res.end();
};
//export the getProducts function
module.exports = {
  getProducts,
};
