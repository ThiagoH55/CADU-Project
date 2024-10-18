'use client'

import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import { useFormState } from "react-dom"
import { signUp } from "./actions"
import { State } from "@/types"
import { signIn } from "next-auth/react"

const initialState: State = {
    success: false,
    errors: {}
}

export default function SignUp() {
    const [state, formAction] = useFormState(signUp, initialState)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const router = useRouter()

    useEffect(() => {
        const login = async () => {
            await signIn('credentials', {
                email,
                password,
                redirect: false
            })
        }

        if (state.success) {
            login()

            router.replace('/')
        }
    }, [state.success, router])

    return (
        <form action={formAction} className="text-red-600">
            <label htmlFor="name">Nome Completo</label>
            <input type="text" name="name" id="name" />
            <label htmlFor="phonenumber">Telefone</label>
            <input type="text" name="phonenumber" id="phonenumber" required/>
            <label htmlFor="email">Em-mail</label>
            <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)} />
            <label htmlFor="password">Senha</label>
            <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)} />

            {Object.keys(state.errors).length > 0 && (
                <div>
                    {Object.entries(state.errors).map((error, index) => (
                        <p key={index}>{error[0]} {error[1]}</p>
                    ))}
                </div>
            )}

            <button type="submit">Criar</button>
        </form>
    )
}
