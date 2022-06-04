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
            req.user = jwt.verify(token, 'screte')
        } catch (err) {
            return res.status(401).json({
                error: {
                    msg: 'Failed to authenticate token!'
                }
            })
        }
    } else {
        return res.status(401).json({
            error: {
                msg: 'No token provided!'
            }
        })
    }

    next()
    return
}