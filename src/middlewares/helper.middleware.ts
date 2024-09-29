import { Request, Response, NextFunction } from 'express';
import { Prisma } from '@prisma/client';
import Joi from 'joi';

export const validate = (schema: Joi.ObjectSchema) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const { error } = schema.validate(req.body);
        if (error) {
            return res.status(400).json({
                message: error.message,
                success: false
            });
        }
        next();
    };
}


export const asyncHandler = (fn: (req: Request, res: Response, next: NextFunction) => Promise<any>) => {
    return (req: Request, res: Response, next: NextFunction) => {
        fn(req, res, next).catch(err => {

            // Catch errors and pass them to the next middleware (error handler)
            if (err instanceof Prisma.PrismaClientKnownRequestError) {
                switch (err.code) {
                    case 'P2002':
                        return res.status(400).json({
                            success: false,
                            message: 'Duplicate field value entered',
                            errors: [err.meta],
                            errorCode: 1001
                        });
                    case 'P2025':
                        return res.status(400).json({
                            success: false,
                            message: "A required record not found.",
                            errors: [err.meta],
                            errorCode: 1001
                        });
                    default:
                        break;
                }
            } else if (err instanceof Prisma.PrismaClientValidationError) {
                return res.status(400).json({
                    success: false,
                    message: 'Validation error',
                    errors: [err.message],
                    errorCode: 1002

                });
            } else if (err instanceof Prisma.PrismaClientUnknownRequestError) {
                return res.status(500).json({
                    success: false,
                    message: 'Unknown error occurred with Prisma',
                    errors: [err],
                    errorCode: 1003
                });
            }

            // Handle all other errors
            res.status(err.statusCode).json({
                success: false,
                message: err.message || 'Internal Server Error',
                errors: err.errors,
                errorCode: 1004
            });
        });
    };
}

