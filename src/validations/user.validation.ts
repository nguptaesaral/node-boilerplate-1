import Joi from 'joi';

export const loginSchema = Joi.object({
    phoneNumber: Joi.string().pattern(/^[0-9]{10}$/).required(),
    password: Joi.string().min(6).required(),
});


export const userRegistrationSchema = Joi.object({
    email: Joi.string().email().required(),
    name: Joi.string().min(1).max(100).required(), // Required and has a max length
    profileUrl: Joi.string().uri().allow(''), // URL format, can be empty
    gender: Joi.string().valid('MALE', 'FEMALE', 'OTHER').default(null).optional(), // Optional and can be empty
}).concat(loginSchema);


