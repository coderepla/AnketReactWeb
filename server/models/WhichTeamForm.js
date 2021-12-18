const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const whichTeamFormSchema = new Schema({
    name: {
        type: String,
    },
    lastname: {
        type: String,
    },
    birth: {
        type: Number,
    },
    Gender: {
        type: String,
    },
    team: {
        type: String,
    },
    explanation: {
        type: String
    },
    pollsterID: {
        type: Schema.ObjectId
    }
});

module.exports = mongoose.model("whichTeam", whichTeamFormSchema);
