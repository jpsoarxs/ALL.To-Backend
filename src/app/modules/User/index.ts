import { Router, Request, Response } from 'express'

import { UserService } from '@services/User/index'
import { CreateUserDto } from '@dto/index'

import { PasswordHash } from '@util/password-hash'

const router = Router()

interface DTO<T> extends Request {
    body: T
}

router.post('/', async (req: DTO<CreateUserDto>, res: Response) => {
    try {
        const userService = new UserService()

        const { name, lastname, email, birth_date } = req.body
        let password = req.body && req.body.password

        if (!name || !lastname || !email || !password || !birth_date) {
            res.status(400).json({ error: 'Missing required fields' })
            return
        }

        if (!email.includes('@')) {
            res.status(400).json({ error: 'Invalid email' })
            return
        }

        if (password.length < 6) {
            res.status(400).json({ error: 'Password must be at least 6 characters' })
            return
        }

        const exists = await userService.findOne({ email })
        if (exists) {
            res.status(400).json({ error: 'User already exists' })
            return
        }

        const hash = PasswordHash.hash(password)
        password = hash


        const user = await userService.create({ ...req.body, password })

        return res.status(201).json(user)
    } catch (err) {
        if (err instanceof Error) {
            return res.status(500).json({ error: err.message })
        }

        return res.status(500).json({ error: 'Unexpected error' })
    }
})

export default router