export default {
    PORT: process.env.PORT,
    ENVIRONMENT: process.env.NODE_ENV,
    SECRET_KEY: process.env.JWT_SECRET || 'yourSecretKey',
    SALT_ROUNDS: 10
}