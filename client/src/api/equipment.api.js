import api from "./axios";

export const fetchEquipment = async () => {
  const res = await api.get("/equipment");
  return res.data;
};
