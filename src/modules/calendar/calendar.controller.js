import { getPreventiveByRange } from "./calendar.service.js";

export const getCalendar = async (req, res) => {
  const { startDate, endDate } = req.query;

  if (!startDate || !endDate) {
    return res.status(400).json({ msg: "startDate and endDate required" });
  }

  const data = await getPreventiveByRange(startDate, endDate);
  res.json(data);
};
