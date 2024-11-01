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

                            <div className="flex justify-between">
                                <div className="flex flex-col w-full">
                                    <label htmlFor="cpf">CPF</label>
                                    <div className="flex flex-1">
                                        <input className="bg-gray-300 mb-4 h-10 p-2 rounded-xl w-full mr-14" type="text" name="cpf" id="cpf" />
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="gender">Gênero</label>
                                    <select className="bg-gray-300 mb-4 h-10 p-2 rounded-xl" name="generos" id="gender">
                                        <option value={0}>Masculino</option>
                                        <option value={1}>Feminino</option>
                                        <option value={3}>Outro</option>
                                    </select>
                                </div>
                                
                            </div>
                            <div className="flex justify-between">
                                <div className="flex flex-col w-full">
                                    <label htmlFor="adress">CEP</label>
                                    <input className="bg-gray-300 mb-4 h-10 p-2 mr-14 rounded-xl " type="cep" name="cep" id="cep" />

                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="">Cidade</label>
                                    <select className="bg-gray-300 mb-4 h-10 p-2 rounded-xl" name="City" id="Cidade">
                                        <option value={0}>Selecione a cidade :p</option>
                                        <option value={1}>Abreu e Lima</option>
                                        <option value={2}>Araçoiaba</option>
                                        <option value={3}>Cabo de Santo Agostinho</option>
                                        <option value={4}>Camaragibe</option>
                                        <option value={5}>Igarassu</option>
                                        <option value={6}>Ilha de Itamaracá</option>
                                        <option value={7}>Itapissuma</option>
                                        <option value={8}>Jaboatão dos Guararapes</option>
                                        <option value={9}>Moreno</option>
                                        <option value={10}>Olinda</option>
                                        <option value={11}>Recife</option>
                                        <option value={12}>São Lourenço da Mata</option>
                                    </select>
                                </div>
                            </div>
                            <label htmlFor="adress">Endereço</label>
                            <input className="bg-gray-300 mb-4 h-10 p-2 rounded-xl" type="text" name="adress" id="adress" required />
                            <div className="flex justify-between">
                            </div>
                        </div>
                        <div className="flex">
                            <input type="checkbox" />
                            <p className="ml-4">Eu li e concordo com os termos de uso e condições.</p>
                        </div>


                        <div className="flex w-full justify-between items-center relative py-7 px-2 mt-6">
                            <div className="flex justify-between w-full">
                                <div className="flex gap-2 rotate-180 w-fit">
                                    <RoundedNextButton />
                                </div>

                            </div>
                                <div>
                                    <button className="px-5 py-3 rounded-full text-sm text-white bg-orange-500 " type="submit" >FINALIZAR</button>
                                </div>
                            
                            <div className="absolute w-full flex justify-center">
                                <div className="size-28">
                                    <img src="./LogoCadu.svg" alt="" />
                                </div>        
                            </div>
                        </div>

                        {Object.keys(state.errors).length > 0 && (
                            <div className="mb-4">
                                {Object.entries(state.errors).map((error, index) => (
                                    <p className="text-center w-full text-red-500 text-sm" key={index}>{error[0]} {error[1]}</p>
                                ))}

                            </div>
                        )}


                    </div>

                </form>
            </div>

        </div>
    )
}
