const Book = {
    pollster: async (parent, args, { Pollster }) => {
        const query = await Pollster.findById(parent.pollsterID)
        return query;
    },

};

module.exports = Book;