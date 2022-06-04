import jwt from 'jsonwebtoken'

export class AuthService {
    public generateToken(user: any): string {
        return jwt.sign(user, 'screte')
    }

    public verifyToken(token: string): any {
        return jwt.verify(token, 'screte')
    }
}