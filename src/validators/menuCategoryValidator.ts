import Joi from "joi";

const menuCategoryValidator = Joi.object({
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
    description: Joi.string().min(10).max(100).required(),
    category: Joi.string().required(),
    restaurantId: Joi.string().required()


});

export default menuCategoryValidator;