import * as SERVICE from "./request.service.js";

const CREATE = async (req, res) =>
{
    const request = await SERVICE.CREATE_REQUEST(req.body);
    res.status(201).json(request);
};

const UPDATE_STATUS = async (req, res) =>
{
    const { status, duration } = req.body;
    const request = await SERVICE.UPDATE_STATUS(req.params.id, status, duration);
    res.json(request);
};

const KANBAN = async (req, res) =>
{
    const data = await SERVICE.GET_KANBAN();
    res.json(data);
};

export
{
    CREATE,
    UPDATE_STATUS,
    KANBAN
};

