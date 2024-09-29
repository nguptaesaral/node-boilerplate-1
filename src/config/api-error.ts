class ApiError extends Error {
    public statusCode: number;
    public errorCode: number;
    public errors: string[];
    constructor(message?: string, statusCode?: number, errors?: string[], errorCode?: number) {
        super(message || '');
        this.name = 'ApiError';
        this.statusCode = statusCode || 500;
        this.errorCode = errorCode || 1000;
        this.errors = errors || []
        Object.setPrototypeOf(this, ApiError.prototype);
    }
}

export default ApiError;