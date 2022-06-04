import { Entity, ObjectID, ObjectIdColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm"

import { UserDto } from '@dto/index'
@Entity()
export class User implements UserDto {
    @ObjectIdColumn()
    public id: ObjectID

    @Column({ type: "string" })
    public name: string

    @Column({ type: "string" })
    public lastname: string

    @Column({ type: "string", unique: true })
    public email: string

    @Column({ type: "string", select: false })
    public password: string

    @Column({ type: "string" })
    public birth_date: string

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    public created_at: Date

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
    public updated_at: Date
}