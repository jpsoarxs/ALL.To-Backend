declare global {
    namespace Express {
        interface Request {
            user: any
        }
    }

    namespace NodeJS {
        interface ProcessEnv {
            JWT_SECRET: string,
            NODE_ENV: 'development' | 'production'
        }
    }
}

export { }
