const mongoose = require("mongoose");

const MaintenanceTeamSchema = new mongoose.Schema(
{
    name:
    {
        type: String,
        required: true
    },
    members:
    [
        {
            type: String
        }
    ]
},
{
    timestamps: true
});

module.exports = mongoose.model("MaintenanceTeam", MaintenanceTeamSchema);

