import * as SERVICE from "./team.service.js";

const CREATE = async (req, res) =>
{
    const team = await SERVICE.CREATE_TEAM(req.body);
    res.status(201).json(team);
};

const GET_ALL = async (req, res) =>
{
    const teams = await SERVICE.GET_ALL_TEAMS();
    res.json(teams);
};

export
{
    CREATE,
    GET_ALL
};
