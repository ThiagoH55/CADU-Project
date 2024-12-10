'use client'

import { useSession } from "next-auth/react"
import AnimalCard from "@/components/animal-card"
import { getAnimals } from "@/app/actions"
import AnimalPage from "../animal/[slug]/page"
import { FormEvent, useEffect, useState } from "react";
import { getAnimalById } from "@/app/actions";
import AnimalData from "@/components/animal-data";
import Link from "next/link"






export default function Profile() {
    const { data, status } = useSession()

    const [animal, setAnimal] = useState<
        ({
            user: {
                name: string;
                cellPhone: string;
                city: string;
            };
            breed: {
                name: string;
            };
        } & {
            name: string;
            description: string;
            id: string;
            image: string;
            userId: string;
            breedId: string;
        }) | null>(null);


    return (
        <div className="bg-gray-300 min-h-screen font-[family-name:var(--font-be-vietnam)]">
            <div className="bg-orange-500 min-h-80 flex rounded-bl-3xl">
                <div className="">
                    <header className=" h-16 w-full items-center flex text-3xl fixed justify-between">
                        <div className="flex  items-center">


                            <Link href={'/'}>
                                <button className="flex justify-self-center ml-6 rotate-180 text-4xl text-white">
                                    &#10140;
                                </button>
                            </Link>

                        </div>

                        <div className="flex flex-rol items-center ">
                            <div className="mr-6 mt-5">
                                <Link href={'/'}>
                                    <img className="w-14" src="/logoSemDesc.png" alt="" />
                                </Link>

                            </div>
                        </div>
                    </header>
                </div>



                <div className="ml-16  mt-10">
                    <img className="rounded-full border-4 border-white" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj2LfHjdVAKEJhUQDwvn1Z7aLXv-xGFLqorNJEaciDuT3y2ZB69bsj5FrHIznxfWKvaJs&usqp=CAU" alt="" />
                </div>

            </div>

            <div>

                <div className="text-orange-500 text-4xl ml-16 mt-10">
                    <h1 >

                        Doações

                    </h1>
                </div>

                <div>

                </div>

            </div>

        </div>
    )
}
