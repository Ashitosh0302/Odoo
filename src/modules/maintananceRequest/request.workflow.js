import Equipment from "../equipment/equipment.model.js";

const AUTO_FILL_FROM_EQUIPMENT = async (request) =>
{
    const equipment = await Equipment.findById(request.equipment);

    request.maintenanceTeam = equipment.maintenanceTeam;

    return request;
};

export
{
    AUTO_FILL_FROM_EQUIPMENT
};

