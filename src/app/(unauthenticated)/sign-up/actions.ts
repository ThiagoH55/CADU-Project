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
        cellPhone: z.string().length(11, 'Número deve conter 11 digitos'),
        email: z.string().email('E-mail não é válido'),
        password: z.string().min(8),
        street: z.string(),
        city: z.string(),
        state: z.string().length(2, 'O acrônomo do estado deve conter apenas dois dígitos')
    })

    type SignUp = z.infer<typeof schema>

    const data: SignUp = {
        name: formData.get('name') as string,
        cellPhone: formData.get('phonenumber') as string,
        email: formData.get('email') as string,
        password: formData.get('password') as string,
        street: formData.get('street') as string,
        city: formData.get('city') as string,
        state: formData.get('state') as string
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
