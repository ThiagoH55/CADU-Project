import { usuarios } from "@prisma/client"

export interface State {
    success: boolean
    errors: object
}

export type UserWithoutPassword = Omit<usuarios, "USR_SENHA" | "USR_ID"> & { id: string }
