import Team from "./team.model.js";

const CREATE_TEAM = async (data) =>
{
    return await Team.create(data);
};

const GET_ALL_TEAMS = async () =>
{
    return await Team.find();
};

export
{
    CREATE_TEAM,
    GET_ALL_TEAMS
};
