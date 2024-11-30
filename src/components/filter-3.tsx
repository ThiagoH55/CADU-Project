export default function FiltroLocal() {
    return (
        <div className="flex flex-col items-center mx-16 w-64 min-h-14 bg-white rounded-2xl drop-shadow-md m-8 text-gray-800">
            <div className="flex p-3">
                <h1 className="text-2xl font-[family-name:var(--font-be-vietnam)]">LOCALIZAÇÃO</h1>
                <div className="w-6 mx-1">
                    <img src="/local.png"></img>
                </div>
            </div>

            <div className="font-[family-name:var(--font-be-vietnam-regular)] flex flex-col items-center gap-2 my-2 rounded" >
                <div className="hover:bg-orange-400 hover:scale-105 cursor-pointer rounded-full px-2 bg-gray-200 p-1 w-full drop-shadow-md m-1 text-center"> <p>Abreu e Lima</p></div>
                <div className="hover:bg-orange-400 hover:scale-105 cursor-pointer rounded-full px-2 bg-gray-200 p-1 w-full drop-shadow-md m-1 text-center"> <p>Araçoiaba</p></div>
                <div className="hover:bg-orange-400 hover:scale-105 cursor-pointer rounded-full px-2 bg-gray-200 p-1 w-full drop-shadow-md m-1 text-center"> <p>Cabo de Santo Agostinho</p></div>
                <div className="hover:bg-orange-400 hover:scale-105 cursor-pointer rounded-full px-2 bg-gray-200 p-1 w-full drop-shadow-md m-1 text-center"> <p>Camaragibe</p></div>
                <div className="hover:bg-orange-400 hover:scale-105 cursor-pointer rounded-full px-2 bg-gray-200 p-1 w-full drop-shadow-md m-1 text-center"> <p>Igarassu</p></div>
                <div className="hover:bg-orange-400 hover:scale-105 cursor-pointer rounded-full px-2 bg-gray-200 p-1 w-full drop-shadow-md m-1 text-center"> <p>Itamaracá</p></div>
                <div className="hover:bg-orange-400 hover:scale-105 cursor-pointer rounded-full px-2 bg-gray-200 p-1 w-full drop-shadow-md m-1 text-center"> <p>Itapisuma</p></div>
                <div className="hover:bg-orange-400 hover:scale-105 cursor-pointer rounded-full px-2 bg-gray-200 p-1 w-full drop-shadow-md m-1 text-center"> <p>Jaboatão dos Guararapes</p></div>
                <div className="hover:bg-orange-400 hover:scale-105 cursor-pointer rounded-full px-2 bg-gray-200 p-1 w-full drop-shadow-md m-1 text-center"> <p>Moreno</p></div>
                <div className="hover:bg-orange-400 hover:scale-105 cursor-pointer rounded-full px-2 bg-gray-200 p-1 w-full drop-shadow-md m-1 text-center"> <p>Olinda</p></div>
                <div className="hover:bg-orange-400 hover:scale-105 cursor-pointer rounded-full px-2 bg-gray-200 p-1 w-full drop-shadow-md m-1 text-center"> <p>Recife </p></div>
                <div className="hover:bg-orange-400 hover:scale-105 cursor-pointer rounded-full px-2 bg-gray-200 p-1 w-full drop-shadow-md m-1 text-center"> <p>São Lourenço da Mata</p></div>
            </div>
        </div>
    )
}