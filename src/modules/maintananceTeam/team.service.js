const Team = require("./team.model");

const CREATE_TEAM = async(data) =>
{
    return await Team.create(data);
};

const GET_ALL_TEAMS = async() =>
{
    return await Team.find();
};

module.exports =
{
    CREATE_TEAM,
    GET_ALL_TEAMS
};

