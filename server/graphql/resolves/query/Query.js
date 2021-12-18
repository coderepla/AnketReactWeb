const Query = {
    whichTeamForms: (source, args, { WhichTeamForm }) => WhichTeamForm.find({}),
    whichTeamForm: async (source, args, { WhichTeamForm }) => {
        return await WhichTeamForm.findById(args.id);
    },
    pollsters: (source, args, { Pollster }) => Pollster.find({}),
    pollster: async (source, args, { Pollster }) => {
        return await Pollster.findById(args.id);
    },
};
module.exports = Query;
