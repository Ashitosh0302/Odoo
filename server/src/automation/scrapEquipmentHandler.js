import * as EQUIPMENT_SERVICE from "../modules/equipment/equipment.service.js";

const SCRAP_EQUIPMENT_HANDLER = async () =>
{
    try
    {
        const scrapList = await EQUIPMENT_SERVICE.GET_EQUIPMENT_TO_SCRAP();
        for(const equipment of scrapList)
        {
            await EQUIPMENT_SERVICE.SCRAP_EQUIPMENT(equipment.id);
            console.log(`Equipment ${equipment.name} (ID: ${equipment.id}) scrapped`);
        }
    }
    catch(err)
    {
        console.error("Error in scrapEquipmentHandler:", err.message);
    }
};

export default SCRAP_EQUIPMENT_HANDLER;
