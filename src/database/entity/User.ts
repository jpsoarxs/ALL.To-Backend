import { Entity, ObjectID, ObjectIdColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm"

@Entity()
export class User {
    @ObjectIdColumn()
    id: ObjectID

    @Column({ type: "string" })
    name: string

    @Column({ type: "string" })
    lastname: string

    @Column({ type: "string", unique: true })
    email: string

    @Column({ type: "string", select: false })
    password: string

    @Column({ type: "string" })
    birth_date: string

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    created_at: Date

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
    updated_at: Date
}