export default function FiltroFase() {
    return(
        <div className="flex flex-col items-center mx-16 w-64 min-h-80 bg-white rounded-2xl drop-shadow-md m-8 text-gray-700">
            <div className="flex items-center m-4">
                <h1 className="text-center text-2xl font-[family-name:var(--font-be-vietnam)]">FASE</h1>
                <div className="w-6 mx-1">
                    <img src="/fase.png" alt=""/>
                </div>
            </div>
                <div className="flex bg-gray-200 w-36 mx-5 rounded-3xl justify-center drop-shadow-md p-2 m-2">
                <p className="font-[family-name:var(--font-be-vietnam-regular)]">Filhote</p>
                </div>
                <div className="flex bg-gray-200 w-36 mx-5 rounded-3xl justify-center drop-shadow-md p-2 m-2">
                <p className="font-[family-name:var(--font-be-vietnam-regular)]">Jovem</p>
                </div>
                <div className="flex bg-gray-200 w-36 mx-5 rounded-3xl justify-center drop-shadow-md p-2 m-2">
                <p className="font-[family-name:var(--font-be-vietnam-regular)]">Adulto</p>
                </div>
                <div className="flex bg-gray-200 w-36 mx-5 rounded-3xl justify-center drop-shadow-md p-2 m-2">
                <p className="font-[family-name:var(--font-be-vietnam-regular)]">Idoso</p>
                </div>
        </div>
    )
}