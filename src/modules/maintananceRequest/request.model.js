import mongoose from "mongoose";

const RequestSchema = new mongoose.Schema(
{
    subject:
    {
        type: String,
        required: true
    },
    type:
    {
        type: String,
        enum: ["Corrective", "Preventive"],
        required: true
    },
    equipment:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Equipment",
        required: true
    },
    maintenanceTeam:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: "MaintenanceTeam"
    },
    assignedTechnician:
    {
        type: String
    },
    scheduledDate:
    {
        type: Date
    },
    duration:
    {
        type: Number
    },
    status:
    {
        type: String,
        enum: ["New", "In Progress", "Repaired", "Scrap"],
        default: "New"
    }
},
{
    timestamps: true
});

export default mongoose.model("MaintenanceRequest", RequestSchema);

