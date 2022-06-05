import jwt from 'jsonwebtoken'
import { UserDto } from '@dto/index'

interface TokenResponse {
    token: string,
    type: 'Bearer'
    user: UserDto,
    expiresIn: string
}
export class AuthService {
    public login(user: UserDto): TokenResponse {
        const expiresIn = '1h'

        const payload = {
            id: user.id,
            email: user.email,
            name: user.name,
        }

        const token = jwt.sign(
            payload,
            process.env.JWT_SECRET,
            {
                expiresIn
            }
        )

        delete user.password

        return {
            token,
            type: 'Bearer',
            user,
            expiresIn
        }
    }

    public verifyToken(token: string): any {
        return jwt.verify(token, process.env.JWT_SECRET)
    }
}