import { comparePasswords, hashPassword, generateToken } from '../services/auth.services';
import prisma from '../config/prisma';
import ApiError from '../config/api-error'
import { User } from '../types/user.types';

export const registerUser = async (userData: User) => {
    const hashedPassword = await hashPassword(userData.password);

    const newUser = await prisma.user.create({
        data: {
            ...userData,
            password: hashedPassword,
        },
    });

    return generateToken(newUser.id);
};

export const loginUser = async (phoneNumber: string, password: string) => {
    const user = await prisma.user.findUnique({ where: { phoneNumber } });
    if (!user) throw new ApiError('Invalid credentials', 401);

    const isMatch = await comparePasswords(password, user.password);
    console.log({ isMatch, user })
    if (!isMatch) throw new ApiError('Invalid credentials', 401);


    return generateToken(user.id);
};