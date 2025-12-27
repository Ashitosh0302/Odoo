import calendarRoute from "./calendar/calendar.routes.js";
import equipmentRoute from "./equipment/equipment.routes.js";
import MRRoute from "./maintenanceRequest/request.routes.js";
import MTRoute from "./maintenanceTeam/team.routes.js";
import reportsRoute from "./reports/report.routes.js";
import userRoute from "./users/user.routes.js";

export const registerModules = (app) => {
  app.use("/api/calendar", calendarRoute);
  app.use("/api/equipment", equipmentRoute);
  app.use("/api/maintenance-requests", MRRoute);
  app.use("/api/maintenance-teams", MTRoute);
  app.use("/api/reports", reportsRoute);
  app.use("/api/users", userRoute);
};
