import Joi from "joi";

const menuItemValidator = Joi.object({
    name: Joi.string()
        .min(3)
        .max(30)
        .trim()
        .required()
        .messages({
            "string.base": "Name must be a string",
            "string.empty": "Name is required",
            "string.min": "Name must be at least 3 characters",
            "string.max": "Name must not exceed 30 characters",
            "any.required": "Name is required",
        }),
    description: Joi.string().min(10).max(100),
    price: Joi.number().min(1).max(100000),
    imgURL: Joi.string().default(''),
    rating: Joi.number().min(0).max(5),
    isCustomisable: Joi.boolean().default(false),
    isAvailabel: Joi.boolean(),
    isVeg: Joi.boolean().default(false),
    calories: Joi.number().min(0).max(3000),
    menuCategoryId: Joi.string(),

});

export default menuItemValidator;