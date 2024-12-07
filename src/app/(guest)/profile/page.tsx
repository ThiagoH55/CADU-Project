'use client'

import { useSession } from "next-auth/react"

export default function Profile() {
    const { data, status } = useSession()
    
    return (
        <div>
            <div>Status: {status}</div>

            <div>Data: {data?.user.name}</div>
        </div>
    )
}
