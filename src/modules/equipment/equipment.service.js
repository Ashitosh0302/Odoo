const Equipment = require("./equipment.model");

const CREATE_EQUIPMENT = async(data) =>
{
    return await Equipment.create(data);
};

const GET_EQUIPMENT_BY_ID = async(id) =>
{
    return await Equipment.findById(id).populate("maintenanceTeam");
};

const GET_ALL_EQUIPMENT = async() =>
{
    return await Equipment.find();
};

const MARK_EQUIPMENT_SCRAP = async(id) =>
{
    return await Equipment.findByIdAndUpdate(
        id,
        { isScrapped: true },
        { new: true }
    );
};

module.exports =
{
    CREATE_EQUIPMENT,
    GET_EQUIPMENT_BY_ID,
    GET_ALL_EQUIPMENT,
    MARK_EQUIPMENT_SCRAP
};
