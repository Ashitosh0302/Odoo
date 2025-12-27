import Joi from "joi";

const CREATE_REQUEST = Joi.object(
{
    subject:
    Joi.string()
        .min(3)
        .max(200)
        .required(),

    type:
    Joi.string()
        .valid("Corrective", "Preventive")
        .required(),

    equipment:
    Joi.string()
        .required(),

    scheduledDate:
    Joi.when("type",
    {
        is: "Preventive",
        then: Joi.date().required(),
        otherwise: Joi.forbidden()
    }),

    assignedTechnician:
    Joi.string()
        .optional(),

    status:
    Joi.string()
        .valid("New", "In Progress", "Repaired", "Scrap")
        .optional()
});

const UPDATE_STATUS = Joi.object(
{
    status:
    Joi.string()
        .valid("In Progress", "Repaired", "Scrap")
        .required(),

    duration:
    Joi.when("status",
    {
        is: "Repaired",
        then: Joi.number().positive().required(),
        otherwise: Joi.forbidden()
    })
});

export
{
    CREATE_REQUEST,
    UPDATE_STATUS
};

