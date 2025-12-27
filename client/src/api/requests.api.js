import api from "./axios";

export const getKanbanRequests = async () => {
  const res = await api.get("/maintenance-requests/kanban");
  return res.data;
};

export const updateRequestStatus = async (id, payload) => {
  const res = await api.patch(
    `/maintenance-requests/${id}/status`,
    payload
  );
  return res.data;
};
