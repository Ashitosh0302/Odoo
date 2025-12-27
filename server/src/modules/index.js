// src/modules/index.js
import calendarRoutes from "./calendar/calendar.routes.js";
import equipmentRoutes from "./equipment/equipment.routes.js";
import maintenanceRequestRoutes from "./maintananceRequest/request.routes.js";
import maintenanceTeamRoutes from "./maintananceTeam/team.routes.js";
import reportRoutes from "./reports/report.routes.js";
import userRoutes from "./users/user.routes.js";

export const registerModules = (app) => {
  app.use("/api/calendar", calendarRoutes);
  app.use("/api/equipment", equipmentRoutes);
  app.use("/api/maintenance-requests", maintenanceRequestRoutes);
  app.use("/api/maintenance-teams", maintenanceTeamRoutes);
  app.use("/api/reports", reportRoutes);
  app.use("/api/users", userRoutes);
};
