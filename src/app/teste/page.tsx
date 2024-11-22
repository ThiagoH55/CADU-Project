'use client'

import { FormEvent } from "react"

export default function Teste() {
    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()

        const form = new FormData(e.currentTarget)

        const name = form.get('name')
        const description = form.get('description')
        
        const phoneNumber = '81989654101'
        const message = `Boa tarde neymar.\n Queria que você me arrumasse um ${name} com a variação de ${description}`

        console.log(name, description)
        
        const encodedMessage = encodeURIComponent(message)
    
        return `https://wa.we/${phoneNumber.replace(/^(.{2})./, '$1')}?text=${encodedMessage}`
    }



    return (
        <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="">Bom dia</label>
            <input type="text" name="name" />
            <label htmlFor="">Boa noite</label>
            <input type="text" name="description" />
            <button type="submit">Enviar</button>
        </form>
        </div>
    )
}