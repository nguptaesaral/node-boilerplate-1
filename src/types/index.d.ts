import { NextFunction, Request, Response } from "express";
import { CreateOrganizationInput, UpdateOrganizationInput } from "./organization";

declare global {
    namespace Express {
        interface Request {
            whereOptions?: any;
            pagination: { page: number; limit: number; skip: number; isPaginated: boolean };
            user?: {}
        }
    }
}

export interface APIResponse<T = any> {
    // Generic for flexibility
    success: boolean;
    message?: string;
    errors: any[];
    data: T;
    meta: {} | { page: number; limit: number; total: number };
}

export type ApiRequest<T = APIResponse> = (req: Request, res: Response<T>, next: NextFunction) => any;


export {
    CreateOrganizationInput,
    UpdateOrganizationInput,
}