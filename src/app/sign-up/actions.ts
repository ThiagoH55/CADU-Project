'use server'

import { State } from "@/types"
import { PrismaClient } from "@prisma/client"
import { z } from "zod"

export async function signUp(prevState: State, formData: FormData) {
    console.log(formData)

    const prisma = new PrismaClient()

    const argon2 = await import('argon2')

    const state = {
        success: true,
        errors: {}
    }

    const schema = z.object({
        name: z.string().max(130, 'Nome muito grande'),
        cellPhone: z.string().min(11, 'Número deve conter 11 digitos'),
        email: z.string().email('E-mail não é válido'),
        password: z.string().min(8)
    })

    type SignUp = z.infer<typeof schema>

    const data: SignUp = {
        name: formData.get('name') as string,
        cellPhone: formData.get('phonenumber') as string,
        email: formData.get('email') as string,
        password: formData.get('password') as string
    }

    const valitedFields = schema.safeParse(data)

    if (!valitedFields.success) {
        state.success = false
        state.errors = valitedFields.error.flatten().fieldErrors

        return state
    }

    const salt = process.env.PASSWORD_SALT

    data.password = await argon2.hash(data.password + salt)

    //salvando no banco de dados
    await prisma.user.create({
        data: {
            ...data
        }
    })
    return state
}
