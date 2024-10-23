'use client'

import { useRouter } from "next/navigation"
import { useState, FormEvent, useEffect } from "react"
import { z } from "zod"
import { signIn as nextAuthSignIn } from 'next-auth/react'

const carouselImages = [
    'https://c4.wallpaperflare.com/wallpaper/572/819/777/australia-kangaroo-wallpaper-preview.jpg',
    'https://images7.alphacoders.com/588/thumb-1920-588602.jpg'
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
            <div className="w-1/3 flex flex-col items-center justify-center">
                <div>
                    Olá, eu sou uma logo
                </div>

                <div>
                    <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-4 min-h-96 min-w-72 space-y-4 text-red-600">
                        <div className="flex flex-col">
                            <label htmlFor="email">E-mail</label>
                            <input type="email" name="email" id="email" />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="password">Senha</label>
                            <input type="password" name="password" id="password" />
                        </div>

                        {Object.keys(errors).length > 0 && (
                            <div>
                                {(Object.entries(errors) as []).map((error, index) => (
                                    <p key={index}>{error[0]} {error[1]}</p>
                                ))}
                            </div>
                        )}

                        <button type="submit">Criar</button>
                    </form>
                </div>

            </div>
            <div className="w-2/3 relative">
                <div className="h-screen w-full bg-cover bg-center bg-no-repeat ease-in duration-300" style={{backgroundImage: `url(${carouselImage})`}}>
                </div>
            </div>
        </div>
    )
}
