'use server'

import { getAnimalById } from "@/app/actions"
import Header from "@/components/header"
import { headers } from "next/headers"

export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const slug = (await params).slug

    // const animal = await getAnimalById(slug)

    return (

        <div className="font-[family-name:var(--font-be-vietnam)]">
            <Header />

            <div className="bg-gray-300 h-screen flex justify-center items-center">
                <div className="w-10/12 h-4/6 bg-white drop-shadow-3xl rounded-3xl">

                    <div className="flex h-1/2 mx-7 my-7 ">
                        <div>
                            <img className="w-2/3 rounded-md" src="https://i.pinimg.com/564x/43/b8/f7/43b8f757efbe31ed48e6875165f3ee5d.jpg" alt="" />
                        </div>

                        <div>
                            <h1 className="text-black text-6xl">Petulancia de capa</h1>

                            <span>Dados</span>
                        </div>
                    </div>

                    <div className="flex mx-5 justify-center">
                        <textarea
                            className="bg-gray-300 w-11/12 h-64 resize-none rounded-md"
                            name="descricao" />
                    </div>

                </div>
            </div>
        </div>
    )
}
