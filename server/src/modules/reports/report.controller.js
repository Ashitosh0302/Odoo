import {
  requestsByTeam,
  requestsByEquipment,
} from "./report.service.js";

export const byTeam = async (req, res) => {
  const data = await requestsByTeam();
  res.json(data);
};

export const byEquipment = async (req, res) => {
  const data = await requestsByEquipment();
  res.json(data);
};
