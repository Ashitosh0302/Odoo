import MaintenanceRequest from "../maintenanceRequest/request.model.js";

export const getPreventiveByRange = async (startDate, endDate) => {
  return await MaintenanceRequest.find({
    type: "Preventive",
    scheduledDate: {
      $gte: new Date(startDate),
      $lte: new Date(endDate),
    },
  }).populate("equipment maintenanceTeam");
};
