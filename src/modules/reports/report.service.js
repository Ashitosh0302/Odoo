import MaintenanceRequest from "../maintenanceRequest/request.model.js";

export const requestsByTeam = async () => {
  return await MaintenanceRequest.aggregate([
    {
      $group: {
        _id: "$maintenanceTeam",
        totalRequests: { $sum: 1 },
      },
    },
  ]);
};

export const requestsByEquipment = async () => {
  return await MaintenanceRequest.aggregate([
    {
      $group: {
        _id: "$equipment",
        totalRequests: { $sum: 1 },
      },
    },
  ]);
};
