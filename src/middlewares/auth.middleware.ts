import prisma from '../config/prisma';
import { ApiRequest } from '../types';
import { verifyToken } from '../services/auth.services';

export const protect: ApiRequest = async (req, res, next) => {
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1];
    }

    if (!token) {
        return res.status(401).json({ success: false, message: 'Not authorized, no token', data: {}, errors: [], meta: {} });
    }

    try {
        const decoded = verifyToken(token);

        if (!decoded.userId) {
            throw new Error;
        }
        // const user = await prisma.user.findFirstOrThrow(decoded.userId);
        const user = { id: decoded.userId }
        req.user = user;
        next();
        return
    } catch (error) {
        console.log(error)
        return res.status(401).json({ success: false, message: 'Token verification failed', data: {}, errors: [], meta: {} });
    }
};
