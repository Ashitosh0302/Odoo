const Joi = require("joi");

const equipmentValidationSchema = Joi.object({

  name: Joi.string()
    .min(3)
    .max(100)
    .required()
    .messages({
      "string.empty": "Equipment name is required",
      "string.min": "Equipment name must be at least 3 characters",
      "any.required": "Equipment name is mandatory"
    }),

  serialNumber: Joi.string()
    .alphanum()
    .min(4)
    .max(50)
    .required()
    .messages({
      "string.empty": "Serial number is required",
      "any.required": "Serial number is mandatory"
    }),

  department: Joi.string()
    .allow(null, ""),

  assignedTo: Joi.string()
    .allow(null, ""),

  purchaseDate: Joi.date()
    .less("now")
    .messages({
      "date.less": "Purchase date cannot be in the future"
    }),

  warrantyExpiry: Joi.date()
    .greater(Joi.ref("purchaseDate"))
    .messages({
      "date.greater": "Warranty expiry must be after purchase date"
    }),

  location: Joi.string()
    .allow(null, ""),

  maintenanceTeam: Joi.string()
    .hex()
    .length(24)
    .allow(null, "")
    .messages({
      "string.length": "Maintenance team must be a valid ObjectId"
    }),

  isScrapped: Joi.boolean()
    .default(false)
});

const validateEquipment = (req, res, next) => {
  const { error, value } = equipmentValidationSchema.validate(req.body, {
    abortEarly: false,
    stripUnknown: true
  });

  if (error) {
    return res.status(400).json({
      status: "validation_error",
      errors: error.details.map(d => d.message)
    });
  }

  req.body = value;
  next();
};

module.exports = {
  validateEquipment
};
