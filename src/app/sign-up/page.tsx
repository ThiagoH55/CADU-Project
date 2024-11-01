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
    const [secondStep, setSecondStep] = useState(false)

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
            <Link href={"/"}>
            <div><img className="size-48" src="/LogoCadu.svg" alt="" /></div>
            </Link>

            <div className="w-7/12 h-7/12 mb-7 py-3 bg-white flex-start items-center justify-center drop-shadow-3xl rounded-3xl ">


                <form action={formAction} className="font-[family-name:var(--font-be-vietnam)]">

                    <div className="text-gray-900 flex flex-col items-center ">

                        <div className="flex justify-center" > <h1 className=" flex justify-center text-2xl text-orange-500 mb-6 ">CADASTRO</h1> </div>

                        <div className={`${!secondStep ? 'flex-col flex justify-center w-9/12' : 'hidden'}`}>

                            <label htmlFor="name">Nome Completo</label>
                            <input className="bg-gray-300 mb-4 h-10 rounded-xl" type="text" name="name" id="name" />
                            <label htmlFor="phonenumber">Telefone</label>
                            <input className="bg-gray-300 mb-4 h-10 rounded-xl" type="text" name="phonenumber" id="phonenumber" required />
                            <label htmlFor="email">E-mail</label>
                            <input className="bg-gray-300 mb-4 h-10 rounded-xl" type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)} />
                            <label htmlFor="password">Senha</label>
                            <div className="flex gap-2">
                                <input className="flex flex-1 bg-gray-300 mb-4 h-10 rounded-xl" type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)} />
                                <button className="w-10 h-10 text-3xl rounded-full text-white bg-orange-500 " type="button" onClick={() => setSecondStep(true)}>&#10140; </button>
                            </div>

                        </div>

                        <div className={`${secondStep ? 'flex-col flex justify-center w-9/12' : 'hidden'}`}>

                            <label htmlFor="name">Nome Completo</label>
                            <input className="bg-gray-300 mb-4 h-10 p-2 rounded-xl" type="text" name="name" id="name" />
                            <label htmlFor="phonenumber">Telefone</label>
                            <input className="bg-gray-300 mb-4 h-10 p-2 rounded-xl" type="text" name="phonenumber" id="phonenumber" required />
                            <label htmlFor="email">E-mail</label>
                            <input className="bg-gray-300 mb-4 h-10 p-2 rounded-xl" type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)} />
                            <label htmlFor="password">Senha</label>
                            <div className="flex gap-2">
                                <input className="flex flex-1 bg-gray-300 mb-4 h-10 p-2 rounded-xl" type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)} />
                                <RoundedNextButton />
                            </div>

                        </div>

                    </div>

                    {Object.keys(state.errors).length > 0 && (
                        <div className="mb-4">
                            {Object.entries(state.errors).map((error, index) => (
                                <p  className="text-center w-full text-red-500 text-sm" key={index}>{error[0]} {error[1]}</p>
                            ))}

                        </div>
                    )}


                    <div className="text-orange-500 text-center text-sm">
                        <p >Já posssui uma conta?</p>
                        <Link href={"/sign-in"} className="text-blue-600">Fazer login</Link>

                    </div>

                </form>
            </div>

        </div>
    )
}
