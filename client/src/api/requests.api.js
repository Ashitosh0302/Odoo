import api from "./axios";

export const fetchKanban = async () => {
  const res = await api.get("/requests/kanban");
  return res.data;
};
