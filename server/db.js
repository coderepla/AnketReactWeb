const mongoose = require("mongoose");

const {
    DB_USER,
    DB_HOST,
    DB_PASS
} = process.env
const uri = `mongodb+srv://${DB_USER}:${DB_PASS}@anketreact.vkfpt.mongodb.net/${DB_HOST}?retryWrites=true&w=majority`;

module.exports = () => {
    mongoose.connect(uri, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
    });

    mongoose.connection.on("open", () => {
        console.log("connected.");
    });

    mongoose.connection.on("error", (err) => {
        console.log(err);
    });
};
