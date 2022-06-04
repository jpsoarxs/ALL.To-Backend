import jwt from 'jsonwebtoken'
import { Request, Response, NextFunction } from 'express'

export const auth = (req: Request, res: Response, next: NextFunction) => {

    const ignorer = ['/auth/token']

    if (ignorer.includes(req.url)) {
        return next()
    }

    if (req.headers.authorization) {
        const [type, token] = req.headers.authorization.split(' ')

        if (type !== 'Bearer') {
            return res.status(401).json({ error: 'Invalid token' })
        }

        try {
            req.user = jwt.verify(token, process.env.JWT_SECRET)
        } catch (err) {
            if (err instanceof Error) {
                if (err.name === 'TokenExpiredError') {
                    return res.status(401).json({ error: 'Token expired' })
                }

                return res.status(401).json({
                    error: 'Failed to authenticate token!'
                })
            }
        }
    } else {
        return res.status(401).json({
            error: 'No token provided!'
        })
    }

    next()
    return
}