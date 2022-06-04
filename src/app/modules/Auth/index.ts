import { Router, Request, Response } from 'express'
import { AuthService } from '@services/Auth'
import { UserService } from '@services/User'
import { PasswordHash } from '@util/password-hash'
const router = Router()

router.post('/token', async (req: Request, res: Response) => {
    const { email, password } = req.body

    const authServices = new AuthService()
    const userService = new UserService()

    const find = await userService.findOne({ email })

    if (!find) {
        return res.status(400).json({
            error: 'User not found'
        })
    }

    const isValid = PasswordHash.compare(password, find.password)

    if (!isValid) {
        return res.status(401).json({
            message: 'Invalid credentials'
        })
    }

    const token = authServices.login(find)
    return res.json(token)
})

export default router