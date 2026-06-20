import Joi from "joi";

const userValidator = Joi.object({
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
    email: Joi.string()
        .email()
        .trim()
        .required()
        .messages({
            "string.email": "Please enter a valid email address",
            "string.empty": "Email is required",
            "any.required": "Email is required",
        }),
    password: Joi.string()
        // .min(6)
        // .max(20)
        .trim()
        .required()
        // .pattern(/^[A-Za-z]+$/)
        .messages({
            // "string.base": "Password must be a 6 string",
            "string.empty": "Password is required",
            // "string.min": "Password must be at least 6 characters",
            // "string.max": "Password must not exceed 20 characters",
            // "string.pattern.base": "Password should contain only alphabets",
            "any.required": "Password is required",
        }),

    role: Joi.string()
        .valid("ADMIN", "RES_OWNER")
        .required()
        .messages({
            "string.base": "role must be a string",
            "any.only":
                "role must be one of ADMIN, RES_OWNER",
            "any.required": "role is required",
        })
        .default("ADMIN"),
    status: Joi.string()
        .valid("ACTIVE", "INACTIVE", "PENDING", "BLOCKED")
        .required()
        .messages({
            "string.base": "status must be a string",
            "any.only":
                "status must be one of ACTIVE, INACTIVE, PENDING or BLOCKED",
            "any.required": "status is required",
        }),
    isActive: Joi.boolean().default(true),
    address: Joi.object({
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

        pincode: Joi.number()
            .required()
    }),
    phone: Joi.number().required(),

});

export default userValidator;