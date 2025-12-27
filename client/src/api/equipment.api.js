import api from "./axios";

export const getEquipment = async () => {
  const res = await api.get("/equipment");
  return res.data;
};
