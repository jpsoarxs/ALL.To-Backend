import { Router, Request, Response } from 'express'
import { AuthService } from '@services/Auth'
const router = Router()

router.post('/token', (req: Request, res: Response) => {
    const { email, password } = req.body

    const authServices = new AuthService()

    if (email !== 'demo@demo.com' && password !== 'demo') {
        return res.status(401).json({
            message: 'Invalid credentials'
        })
    }

    const token = authServices.generateToken({ email })
    return res.json({ token })
})

export default router