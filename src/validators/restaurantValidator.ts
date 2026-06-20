import Joi from "joi";

const restaurantValidator = Joi.object({
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

    address: Joi.object({
        addressLane: Joi.string()
            .min(3)
            .max(40)
            .trim()
            .messages({
                "string.empty": "addressLane is required",
                "string.min": "addressLane must be at least 3 characters",
                "string.max": "addressLane must not exceed 40 characters",
            }),
        city: Joi.string()
            .min(3)
            .max(40)
            .trim()
            .required()
            .messages({
                "string.empty": "City is required",
                "string.min": "City must be at least 3 characters",
                "string.max": "City must not exceed 40 characters",
                "any.required": "City is required",
            }),

        state: Joi.string()
            .min(3)
            .max(40)
            .trim()
            .required()
            .messages({
                "string.empty": "State is required",
                "string.min": "State must be at least 3 characters",
                "string.max": "State must not exceed 40 characters",
                "any.required": "State is required",
            }),

        pincode: Joi.number().required(),
        // latitude: Joi.number().required(),
        // longitude: Joi.number().required(),
    }),
    cuisine: Joi.array().items(Joi.string()).default([]).required(),
    phone: Joi.number().required(),
    rating: Joi.number().min(1).max(5),
    description: Joi.string().min(10).max(100),
    offers: Joi.string(),
    ETA: Joi.number(),
    openingTime: Joi.date().required(),
    closingTime: Joi.date().required(),
    isApproved: Joi.boolean().default(false),
    category: Joi.string(),
    ownerId: Joi.string().required()
});

export default restaurantValidator;