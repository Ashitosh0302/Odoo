import Request from "./request.model.js";
import * as WORKFLOW from "./request.workflow.js";
import Equipment from "../equipment/equipment.model.js";

const CREATE_REQUEST = async (data) =>
{
    data = await WORKFLOW.AUTO_FILL_FROM_EQUIPMENT(data);
    return await Request.create(data);
};

const UPDATE_STATUS = async (id, status, duration) =>
{
    const request = await Request.findByIdAndUpdate(
        id,
        { status, duration },
        { new: true }
    );

    if (status === "Scrap")
    {
        await Equipment.findByIdAndUpdate(
            request.equipment,
            { isScrapped: true }
        );
    }

    return request;
};

const GET_KANBAN = async () =>
{
    return await Request.find().populate("equipment maintenanceTeam");
};

export
{
    CREATE_REQUEST,
    UPDATE_STATUS,
    GET_KANBAN
};

