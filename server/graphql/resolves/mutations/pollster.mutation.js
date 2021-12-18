module.exports = {
    addPollster: async (
        source,
        { name,lastname},
        { Pollster }
    ) => {
        const newPollster = await new Pollster({
            name, lastname
        }).save();

        return newPollster;
    }
};
