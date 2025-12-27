import api from "./axios";

export const getCalendarData = async (startDate, endDate) => {
  const res = await api.get("/calendar", {
    params: { startDate, endDate }
  });
  return res.data;
};
