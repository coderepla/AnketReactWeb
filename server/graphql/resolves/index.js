// resolvers
const Query = require("./query/Query");
const WhichTeamForm = require("./query/WhichTeamForm");
const Pollster = require("./query/Pollster");
// const Movie = require("./query/Movie");

const Mutation = require("./mutations/index");
module.exports = {
    Query,
    Mutation,
    WhichTeamForm,
    Pollster
};