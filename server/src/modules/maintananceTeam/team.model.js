import mongoose from "mongoose";

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

export default mongoose.model("MaintenanceTeam", MaintenanceTeamSchema);
