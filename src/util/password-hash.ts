import bcrypt from 'bcrypt'

export class PasswordHash {
    public static hash(password: string): string {
        return bcrypt.hashSync(password, 10)
    }

    public static compare(password: string, hash: string): boolean {
        return bcrypt.compareSync(password, hash)
    }
}