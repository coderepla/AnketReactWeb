const whichTeam = require("./whichTeam.mutation");
const pollster = require("./pollster.mutation");
const Mutation = {
    ...whichTeam,
    ...pollster,
};
module.exports = Mutation;
