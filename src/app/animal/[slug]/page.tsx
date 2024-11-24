'use server'

import { getAnimalById } from "@/app/actions"
import AnimalData from "@/components/animal-data"
import Header from "@/components/header"
import { headers } from "next/headers"

export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const slug = (await params).slug

    const animal = await getAnimalById(slug)

    return (

        <div className="font-[family-name:var(--font-be-vietnam)]">
            <Header />

            <div className="bg-gray-300 h-screen flex justify-center items-center">
                <div className="w-10/12 h-4/6 bg-white drop-shadow-3xl rounded-3xl">

                    <div className="flex h-1/2 mx-7 my-7">
                        <div className="w-72">
                            <img className="rounded-md" src="https://i.pinimg.com/564x/43/b8/f7/43b8f757efbe31ed48e6875165f3ee5d.jpg" alt="" />
                        </div>

                        <div className="mx-7">
                            <h1 className="text-black text-6xl">

                                {JSON.stringify(animal)}

                            </h1>

                            <div className="my-5 ">

                                <AnimalData/> <AnimalData/>
                            </div>


                            <div className="mt-36">
                                <h1 className="text-black text-3xl ">Doador:
                                    <span className="text-orange-500">Thiago Henrique </span> </h1>
                            </div>

                        </div>


                    </div>

                    <div className="flex mx-7 justify-center">
                        <textarea
                            className="bg-gray-300 w-full h-56 resize-none rounded-md"
                            name="descricao" />
                    </div>

                </div>
            </div>
        </div>
    )
}
