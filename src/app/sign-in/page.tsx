'use client'

import { useRouter } from "next/navigation"
import { useState, FormEvent } from "react"
import { z } from "zod"
import { signIn as nextAuthSignIn } from 'next-auth/react'

export default function SignIn() {
    const [errors, setErrors] = useState({})

    const router = useRouter()

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()

        
        const formData = new FormData(e.currentTarget)
        
        const schema = z.object({
            email: z.string().email('E-mail não é válido'),
            password: z.string().min(8)
        })
        
        type SignUp = z.infer<typeof schema>
        
        const data: SignUp = {
            email: formData.get('email') as string,
            password: formData.get('password') as string
        }
        
        const valitedFields = schema.safeParse(data)
        
        if (!valitedFields.success) {
            setErrors(valitedFields.error.flatten().fieldErrors)
            
            return
        }

        const login = await nextAuthSignIn('credentials', {
            email: formData.get('email'),
            password: formData.get('password'),
            redirect: false
        })

        if (!login?.ok) {
            setErrors({
                general: 'Revise suas credenciais de acesso.'
            })

            return
        }
        
        router.replace("/")
    }

    return (
        <form onSubmit={handleSubmit} className="text-red-600">
            <label htmlFor="email">Em-mail</label>
            <input type="email" name="email" id="email" />
            <label htmlFor="password">Senha</label>
            <input type="password" name="password" id="password" />

            <button type="submit">Criar</button>
        </form>
    )
}
