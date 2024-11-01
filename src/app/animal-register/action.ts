'use server'

import { nextAuthOptions } from "@/lib/utils"
import { State } from "@/types"
import { Gender, PrismaClient } from "@prisma/client"
import { getServerSession } from "next-auth"
import { z } from "zod"

export async function signUp(prevState: State, formData: FormData) {

    const session = await getServerSession(nextAuthOptions)

    console.log(session)
    
    const prisma = new PrismaClient()

    const state = {
        success: true,
        errors: {}
    }

    const schema = z.object({
        // tipoAnimal: z.string().max(130, 'Nome muito grande'),
        // especie: z.string(),
        genero: z.enum(["MACHO", "FEMEA"]),
        nome: z.string().max(100, 'Nome muito grande'),
        // faseVida: z.enum(["Filhote", "Adulto", "Idoso"]),
        // porte: z.enum(["Pequeno", "Médio", "Grande"]),
        // castracao: z.boolean(),
        // cor: z.string().max(15, "Texto excede o limite de caracteres"),
        // localizacao: z.string().max(150, "Texto excede o limite de caracteres"),
        descricao: z.string().max(200, "Texto muito grande, diminua um pouco")
    })

    type SignUp = z.infer<typeof schema>

    const data: SignUp = {
        // tipoAnimal: formData.get('tipoAnimal') as string,
        // especie: formData.get('especie') as string,
        genero: formData.get('genero') as Gender,
        nome: formData.get('nome') as string,
        // faseVida: formData.get('faseVida') as "Filhote" | "Adulto" | "Idoso",
        // porte: formData.get('porte') as "Pequeno" | "Médio" | "Grande",
        // castracao : formData.get('castracao') ? true : false,
        // cor: formData.get('cor') as string,
        // localizacao: formData.get('localizacao') as string,
        descricao: formData.get('descricao') as string
    }

    const valitedFields = schema.safeParse(data)

    if (!valitedFields.success) {
        state.success = false
        state.errors = valitedFields.error.flatten().fieldErrors

        return state
    }

    //salvando no banco de dados
    await prisma.animal.create({
        data:{
            name: data.nome,
            description: data.descricao,
            // ANI_ESPECIE: data.especie,
            gender: data.genero


            // USR_EMAIL: data.email,
            // USR_NOME: data.name,
            // USR_TELEFONE: data.phonenumber,
            // USR_SENHA: data.password,
        }
    })
    return state
}