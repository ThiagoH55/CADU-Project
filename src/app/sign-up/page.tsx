'use client'

import { useRouter } from "next/navigation"
import { useState, FormEvent } from "react"
import { z } from "zod"

export default function SignUp() {

    const [errors, setErrors] = useState({})

    const router = useRouter()

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        
        const formData = new FormData(e.currentTarget)

        const schema = z.object({
            name: z.string().max(130, 'Nome muito grande'),
            phonenumber: z.string().min(11, 'Número deve conter 11 digitos'),
            email: z.string().email('E-mail não é válido'),
            password: z.string().min(8)
        })

        type SignUp = z.infer<typeof schema>

        const data: SignUp = {
            name: formData.get('name') as string,
            phonenumber: formData.get('phonenumber') as string,
            email: formData.get('email') as string,
            password: formData.get('password') as string
        }

        const valitedFields = schema.safeParse(data)

        if (!valitedFields.success) {
            setErrors(valitedFields.error.flatten().fieldErrors)

            return
        }
        
        router.replace("/")
    }
    return (
        <form onSubmit={handleSubmit} className="text-red-600">
            <label htmlFor="name">Nome Completo</label>
            <input type="text" name="name" id="name" />
            <label htmlFor="phonenumber">Telefone</label>
            <input type="text" name="phonenumber" id="phonenumber" required/>
            <label htmlFor="email">Em-mail</label>
            <input type="email" name="email" id="email" />
            <label htmlFor="password">Senha</label>
            <input type="password" name="password" id="password" />

            <button type="submit">Criar</button>
        </form>
    )
}
