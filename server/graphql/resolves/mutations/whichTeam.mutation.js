module.exports = {
    addWhichTeamForm: async (source, {
        name, lastname,
        birth,
        gender,
        team,
        explanation,
        pollsterID
    }, { WhichTeamForm }) => {
        console.log(`pollsterId`, pollsterID)
        const newWhichTeamForm = await new WhichTeamForm({
            name, lastname,
            birth,
            gender,
            team,
            explanation,
            pollsterID
        }).save();

        return newWhichTeamForm;
    },
};
