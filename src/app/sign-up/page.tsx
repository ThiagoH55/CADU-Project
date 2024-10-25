'use client'

import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import { useFormState } from "react-dom"
import { signUp } from "./actions"
import { State } from "@/types"
import { signIn } from "next-auth/react"
import RoundedNextButton from "../components/bottons"
import Link from "next/link"

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

        <div className="flex flex-col justify-center items-center bg-gray-300 h-screen">

            <div><img className="size-48" src="/LogoCadu.svg" alt="" /></div>

            <div className="w-7/12 h-7/12 mb-7 py-3 bg-white flex-start items-center justify-center drop-shadow-3xl rounded-3xl ">


                <form action={formAction} className="">

                    <div className="text-gray-900 font-[family-name:var(--font-be-vietnam-regular)] flex flex-col items-center ">

                        <div className="flex justify-center" > <h1 className=" flex justify-center text-2xl font-[family-name:var(--font-be-vietnam)] text-orange-500 mb-6 ">CADASTRO</h1> </div>

                        <div className="flex-col flex justify-center w-9/12 ">

                            <label htmlFor="name">Nome Completo</label>
                            <input className="bg-gray-300 mb-4 h-10 rounded-xl" type="text" name="name" id="name" />
                            <label htmlFor="phonenumber">Telefone</label>
                            <input className="bg-gray-300 mb-4 h-10 rounded-xl" type="text" name="phonenumber" id="phonenumber" required />
                            <label htmlFor="email">E-mail</label>
                            <input className="bg-gray-300 mb-4 h-10 rounded-xl" type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)} />
                            <label htmlFor="password">Senha</label>
                            <div className="flex gap-2">
                                <input className="flex flex-1 bg-gray-300 mb-4 h-10 rounded-xl" type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)} />
                                <RoundedNextButton />
                            </div>

                        </div>

                    </div>

                    {Object.keys(state.errors).length > 0 && (
                        <div>
                            {Object.entries(state.errors).map((error, index) => (
                                <p key={index}>{error[0]} {error[1]}</p>
                            ))}

                        </div>
                    )}


                    <div className="text-orange-500 font-[family-name:var(--font-be-vietnam-regular)] text-center text-sm">
                        <p >Já posssui uma conta?</p>
                        <Link href={"/sign-in"} className="text-blue-600">Fazer login</Link>

                    </div>

                </form>
            </div>

        </div>
    )
}
