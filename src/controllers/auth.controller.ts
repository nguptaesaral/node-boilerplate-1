import { User } from '../types/user.types';
import { registerUser, loginUser } from './../models/user.model';
import { Request, Response, NextFunction } from 'express';

export const register = async (req: Request, res: Response, next: NextFunction) => {
    const data: User = req.body;
    const token = await registerUser(data);

    res.status(201).json({
        success: true,
        data: { token },
    });
};

export const login = async (req: Request, res: Response, next: NextFunction) => {
    const { phoneNumber, password } = req.body;
    const token = await loginUser(phoneNumber, password);

    res.status(200).json({
        success: true,
        data: { token },
    });
};
