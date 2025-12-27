import * as REQUEST_SERVICE from "../modules/maintananceRequest/request.service.js";
import { sendOverdueNotification } from "../utilities/response.utils.js";

const CHECK_OVERDUE_REQUESTS = async () =>
{
    try
    {
        const overdueRequests = await REQUEST_SERVICE.GET_OVERDUE_REQUESTS();
        for(const request of overdueRequests)
        {
            await REQUEST_SERVICE.MARK_AS_OVERDUE(request.id);
            sendOverdueNotification(request);
            console.log(`Request ${request.id} marked as overdue`);
        }
    }
    catch(err)
    {
        console.error("Error in overdueChecker:", err.message);
    }
};

export default CHECK_OVERDUE_REQUESTS;
