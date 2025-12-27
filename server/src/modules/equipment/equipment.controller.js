import * as SERVICE from "./equipment.service.js";

export const CREATE = async(req, res) =>
{
    const equipment = await SERVICE.CREATE_EQUIPMENT(req.body);
    res.status(201).json(equipment);
};

export const GET_ALL = async(req, res) =>
{
    const equipment = await SERVICE.GET_ALL_EQUIPMENT();
    res.json(equipment);
};
