import Equipment from "./equipment.model.js";

export const CREATE_EQUIPMENT = async(data) =>
{
    return await Equipment.create(data);
};

export const GET_EQUIPMENT_BY_ID = async(id) =>
{
    return await Equipment.findById(id).populate("maintenanceTeam");
};

export const GET_ALL_EQUIPMENT = async() =>
{
    return await Equipment.find();
};

export const MARK_EQUIPMENT_SCRAP = async(id) =>
{
    return await Equipment.findByIdAndUpdate(
        id,
        { isScrapped: true },
        { new: true }
    );
};

