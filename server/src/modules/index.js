// src/index.js
import express from "express";
import cors from "cors";
import morgan from "morgan";

// Middlewares
import AUTH from "./middlewares/auth.middleware.js";
import ROLE from "./middlewares/role.middleware.js";
import ERROR_HANDLER from "./middlewares/error.middleware.js";

// Routes
import calendarRoutes from "./calendar/calendar.routes.js";
import equipmentRoutes from "./equipment/equipment.routes.js";
import maintenanceRequestRoutes from "./maintenanceRequest/request.routes.js";
import maintenanceTeamRoutes from "./maintenanceTeam/team.routes.js";
import reportRoutes from "./reports/report.routes.js";
import userRoutes from "./users/user.routes.js";

// Automation scripts
import AUTO_ASSIGN_TEAM from "./automation/autoAssignTeam.js";
import CHECK_OVERDUE_REQUESTS from "./automation/overdueChecker.js";
import SCRAP_EQUIPMENT_HANDLER from "./automation/scrapEquipmentHandler.js";

// Utils
import { logInfo } from "./utils/logger.utils.js";
import { formatDate, getCurrentDateTime } from "./utils/date.utils.js";

// Scheduling automation
import schedule from "node-schedule";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Routes registration
app.use("/api/calendar", calendarRoutes);
app.use("/api/equipment", equipmentRoutes);
app.use("/api/maintenance-requests", maintenanceRequestRoutes);
app.use("/api/maintenance-teams", maintenanceTeamRoutes);
app.use("/api/reports", reportRoutes);
app.use("/api/users", userRoutes);

// Example of a protected route using middleware
app.get("/api/protected", AUTH, ROLE("admin"), (req, res) => {
    res.json({ message: "You have access!" });
});

// Global error handler
app.use(ERROR_HANDLER);

// Automation schedules
schedule.scheduleJob("0 * * * *", AUTO_ASSIGN_TEAM); // every hour
schedule.scheduleJob("0 * * * *", CHECK_OVERDUE_REQUESTS); // every hour
schedule.scheduleJob("0 0 * * *", SCRAP_EQUIPMENT_HANDLER); // daily at midnight

// Server start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
{
    logInfo(`Server started on port ${PORT} at ${getCurrentDateTime()}`);
});

export default app;
