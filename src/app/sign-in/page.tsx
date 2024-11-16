'use client'

import { useRouter } from "next/navigation"
import { useState, FormEvent, useEffect } from "react"
import { z } from "zod"
import { signIn as nextAuthSignIn } from 'next-auth/react'
import RoundedNextButton from "../../components/bottons"
import Link from "next/link"

const carouselImages = [
    'carrousel-1.png',
    'carrousel-2.png',
    'carrousel-3.png',
    'carrousel-4.png',
    'carrousel-5.png'
]

export default function SignIn() {
    const [errors, setErrors] = useState({})
    const [carouselImage, setCarouselImage] = useState(carouselImages[0])

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

    useEffect(() => {
        setTimeout(() => {
            setCarouselImage(carouselImages[1])
        }, 3000)
    }, [])

    useEffect(() => {
        setTimeout(() => {
            let index = carouselImages.indexOf(carouselImage)

            if (!carouselImages[index + 1]) {
                index = 0
            } else {
                index++
            }

            setCarouselImage(carouselImages[index])
        }, 3000)
    }, [carouselImage])

    return (
        <div className="bg-orange-500 min-h-screen w-full flex">
            <div className="gap-6 w-1/3 flex flex-col items-center justify-center">
                <div>
                    <Link href={'/'}>
                        <img src="LOGO-BRANCA.svg" alt="" />
                    </Link>
                </div>

                <div className="w-full flex justify-center">
                    <form onSubmit={handleSubmit} className="w-9/12 bg-white rounded-2xl p-8 min-h-96 min-w-80 space-y-4 font-semibold text-gray-600">
                        <h1 className="text-center font-[family-name:var(--font-be-vietnam)] pb-5 text-4xl text-orange-500">LOGIN</h1>
                        <div className="flex flex-col">
                            <label htmlFor="email">E-mail</label>
                            <input className="bg-gray-300 font-medium rounded-xl p-2" type="email" name="email" id="email" />
                        </div>

                        <div className="flex flex-col w-full">
                            <label htmlFor="password">Senha</label>
                            <div className="flex gap-2 w-full">
                                <input className="bg-gray-300 font-medium rounded-xl p-2 flex flex-1" type="password" name="password" id="password" />
                                <RoundedNextButton type="submit" />
                            </div>
                            <Link className="text-sm mt-2 ml-1 text-blue-500" href={""}>Esqueceu a senha?</Link>
                        {Object.keys(errors).length > 0 && (
                            <div>
                                {(Object.entries(errors) as []).map((error, index) => (
                                    <p className="text-left ml-1 mt-4 w-full text-wrap text-red-500 text-sm" key={index}>{error[0]} {error[1]}</p>
                                ))}
                            </div>
                        )}
                            <div className="text-center mt-7 text-orange-500 text-sm">
                                <p>Ainda não possui uma conta?</p>
                                <Link className=" mt-2 ml-1 text-blue-500 text-sm" href={"/sign-up"}>Cadastra-se</Link>
                            </div>
                        </div>


                    </form>
                </div>

            </div>
            <div className="w-2/3 relative">
                <div className="h-screen w-full bg-cover bg-center bg-no-repeat transition-width duration-1000 ease-in-out" style={{ backgroundImage: `url(${carouselImage})` }}>
                </div>
            </div>
        </div>
    )
}
