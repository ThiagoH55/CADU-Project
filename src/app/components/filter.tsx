export default function Filtro() {
    return(
        <div className="flex flex-col items-center w-46 min-h-96 bg-white rounded-2xl drop-shadow-md m-4 text-gray-700">
            <h1>ANIMAIS</h1>
            <div className="flex bg-gray-200 w-36 rounded-3xl justify-center drop-shadow-md p-1 m-2">
              <img src="/cachorro.svg" alt=""/>
              <p>Cachorros</p>
            </div>
              <p>Gatos</p>
              <p>Aves</p>
              <p>Reptéis</p>
              <p>Equinos</p>
              <p>Roedores</p>
        </div>
    )
}