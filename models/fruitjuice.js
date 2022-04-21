const mongoose = require("mongoose")
const fruitjuiceSchema = mongoose.Schema({
Itemname: String,
Quantity: Number,
price: String
})
module.exports = mongoose.model("fruitjuice",
fruitjuiceSchema)
