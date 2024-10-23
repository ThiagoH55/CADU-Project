export default function FiltroLocal() {
    return (
        <div className="flex flex-col items-center mx-16 w-64 min-h-14 bg-white rounded-2xl drop-shadow-md m-8 text-gray-700">
            <div className="flex p-3">
                <h1 className="text-2xl font-[family-name:var(--font-be-vietnam)]">LOCALIZAÇÃO</h1>
                <div className="w-6 mx-1">
                    <img src="/local.png"></img>
                    </div> 
            </div>
            <div className="font-[family-name:var(--font-be-vietnam-regular)] flex flex-col items-center gap-2 my-2" >
            <div> <p>Abreu e Lima</p></div>
            <div> <p>Araçoiaba</p></div>
            <div> <p>Cabo de Santo Agostinho</p></div>
            <div> <p>Camaragibe</p></div>
            <div> <p>Igarassu</p></div> 
            <div> <p>Itamaracá</p></div>
            <div> <p>Itapisuma</p></div>
            <div> <p>Jaboatão dos Guararapes</p></div>
            <div> <p>Moreno</p></div>
            <div> <p>Olinda</p></div>
            <div> <p>Recife </p></div>
            <div > <p>São Lourenço da Mata</p></div>
            </div>
        </div>
    )
}