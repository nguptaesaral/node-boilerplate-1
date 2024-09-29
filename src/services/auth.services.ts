import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import constants from '../config/constants';

const SALT_ROUNDS = constants.SALT_ROUNDS;
const JWT_SECRET = constants.SECRET_KEY;

export const hashPassword = (password: string): Promise<string> => {
    return bcrypt.hash(password, SALT_ROUNDS);
};

export const comparePasswords = async (password: string, hashedPassword: string): Promise<boolean> => {
    return bcrypt.compare(password, hashedPassword);
};


export const generateToken = (userId: number): string => {
    return jwt.sign({ userId }, JWT_SECRET, {
        algorithm: "HS256",
        expiresIn: '1d'     // Expire in 1 day
    });
};

export const verifyToken = (token: string): any => {
    return jwt.verify(token, JWT_SECRET);
};

export function generateRandomId() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let id = '';
    for (let i = 0; i < 9; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        id += chars[randomIndex];
    }
    return id;
}