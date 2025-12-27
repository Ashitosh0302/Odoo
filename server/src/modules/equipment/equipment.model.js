const mongoose = require("mongoose");

const EquipmentSchema = new mongoose.Schema(
{
    name:
    {
        type: String,
        required: true
    },
    serialNumber:
    {
        type: String,
        unique: true,
        required: true
    },
    department:
    {
        type: String
    },
    assignedTo:
    {
        type: String
    },
    purchaseDate:
    {
        type: Date
    },
    warrantyExpiry:
    {
        type: Date
    },
    location:
    {
        type: String
    },
    maintenanceTeam:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: "MaintenanceTeam"
    },
    isScrapped:
    {
        type: Boolean,
        default: false
    }
},
{
    timestamps: true
});

module.exports = mongoose.model("Equipment", EquipmentSchema);
