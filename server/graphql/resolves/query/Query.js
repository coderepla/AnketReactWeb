const Query = {
    // tüm yönetmenleri getir
    whichTeamForms: (source, args, { WhichTeamForm }) => WhichTeamForm.find({}),

    // id sini verdiğimiz yönetmeni getir
    // sorugu da girelen değerler(id) args adı altına düşer
    whichTeamForm: async (source, args, { WhichTeamForm }) => {
        return await WhichTeamForm.findById(args.id);
    },
    pollsters: (source, args, { Pollster }) => Pollster.find({}),
    pollster: async (source, args, { Pollster }) => {
        return await Pollster.findById(args.id);
    },
};
module.exports = Query;
