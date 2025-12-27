import * as REQUEST_SERVICE from "../modules/maintenanceRequest/request.service.js";
import * as TEAM_SERVICE from "../modules/maintenanceTeam/team.service.js";

const AUTO_ASSIGN_TEAM = async () =>
{
    try
    {
        const pendingRequests = await REQUEST_SERVICE.GET_PENDING_REQUESTS();
        for(const request of pendingRequests)
        {
            const team = await TEAM_SERVICE.FIND_AVAILABLE_TEAM(request.equipmentType);
            if(team)
            {
                await REQUEST_SERVICE.ASSIGN_TEAM(request.id, team.id);
                console.log(`Request ${request.id} assigned to team ${team.name}`);
            }
            else
            {
                console.log(`No available team for request ${request.id}`);
            }
        }
    }
    catch(err)
    {
        console.error("Error in autoAssignTeam:", err.message);
    }
};

export default AUTO_ASSIGN_TEAM;
