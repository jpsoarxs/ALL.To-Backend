import type { CreateUserDto } from '@dto/index'

import { getMongoManager } from "typeorm"
import { User } from '@src/database/entity/User'

export class UserService {
    public async create(dto: CreateUserDto): Promise<CreateUserDto> {
        const user = new User()

        user.name = dto.name
        user.lastname = dto.lastname
        user.email = dto.email
        user.password = dto.password
        user.birth_date = dto.birth_date

        const manager = getMongoManager()
        const result = await manager.save(user)

        return result
    }

    public async findOne(params: any): Promise<any> {
        const manager = getMongoManager()

        const result = await manager.findOne(User, params)

        return result
    }
}