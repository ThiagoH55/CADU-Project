import { User } from "@prisma/client"

export interface State {
    success: boolean
    errors: object
}

export type UserWithoutPassword = Omit<User, "password">
