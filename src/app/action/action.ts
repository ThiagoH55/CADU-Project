'use server'

import { nextAuthOptions } from "@/lib/utils"
import { State } from "@/types"
import { PrismaClient, usuarios } from "@prisma/client"
import { getServerSession } from "next-auth"
import { z } from "zod"

export async function signUp(prevState: State, formData: FormData) {
    
    const prisma = new PrismaClient()

    // const users:usuarios[] = await prisma.$queryRaw` 
    
    // select * from usuarios

    // `

    const state = {
        success: true,
        errors: {}
    }

    const schema = z.object({
        tipoAnimal: z.string().max(130, 'Nome muito grande'),
        especie: z.string(),
        genero: z.enum(["Macho", "Femea"]),
        nome: z.string().max(100, 'Nome muito grande'),
        
    })

    type SignUp = z.infer<typeof schema>

    const data: SignUp = {
        tipoAnimal: formData.get('tipoAnimal') as string,
        especie: formData.get('especie') as string

        // name: formData.get('name') as string,
        // phonenumber: formData.get('phonenumber') as string,
        // email: formData.get('email') as string,
        // password: formData.get('password') as string
    }

    const valitedFields = schema.safeParse(data)

    if (!valitedFields.success) {
        state.success = false
        state.errors = valitedFields.error.flatten().fieldErrors

        return state
    }

    //salvando no banco de dados
    await prisma.animais.create({
        data:{

            // USR_EMAIL: data.email,
            // USR_NOME: data.name,
            // USR_TELEFONE: data.phonenumber,
            // USR_SENHA: data.password,
        }
    })
    return state
}
