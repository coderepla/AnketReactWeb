const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pollsterSchema = new Schema({
    name: {
        type: String,
    },
    lastname: {
        type: String,
    },
});



module.exports = mongoose.model("pollster", pollsterSchema);
