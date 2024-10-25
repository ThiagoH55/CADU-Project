export default function FiltroAnimais() {
  return (
    <div className="flex flex-col items-center mx-16 w-64 min-h-96 bg-white rounded-2xl drop-shadow-md m-4 text-gray-700">
      <div className="text-center p-3">
        <h1 className="text-2xl font-[family-name:var(--font-be-vietnam)]">ANIMAIS</h1>
      </div>
      <div className="flex bg-gray-200 w-40 mx-5 rounded-3xl text-center justify-start drop-shadow-md p-1 m-2">
        <div className="w-8 mx-1">
          <img src="/cachorro.svg" alt="" />
        </div>
        <p className="font-[family-name:var(--font-be-vietnam-regular)]">Cachorros</p>
      </div>
      <div className="flex bg-gray-200 w-40 mx-5 rounded-3xl justify-startenter drop-shadow-md p-1 m-2">
        <div className="w-8 mx-1">
          <img src="/gato.png" alt="" />
        </div>
        <p className="font-[family-name:var(--font-be-vietnam-regular)]">Gatos</p>
      </div>
      <div className="flex bg-gray-200 w-40 mx-5 rounded-3xl justify-startenter drop-shadow-md p-1 m-2">
        <div className=" w-6 mx-1">
          <img src="/ave.png" alt="" />
        </div>
        <p className="font-[family-name:var(--font-be-vietnam-regular)]">Aves</p>
      </div>
      <div className="flex bg-gray-200 w-40 mx-5 rounded-3xl justify-startenter drop-shadow-md p-1 m-2">
        <div className=" w-4 mx-1">
          <img src="/reptio.png" alt="" />
        </div>
        <p className="font-[family-name:var(--font-be-vietnam-regular)]">Reptéis</p>
      </div>
      <div className="flex bg-gray-200 w-40 mx-5 rounded-3xl justify-startenter drop-shadow-md p-1 m-2">
        <div className=" w-6 mx-1">
          <img src="/equino.png" alt="" />
        </div>
        <p className="font-[family-name:var(--font-be-vietnam-regular)]">Equinos</p>
      </div>
      <div className="flex bg-gray-200 w-40 mx-5 rounded-3xl justify-startenter drop-shadow-md p-1 m-2">
        <div className=" w-6 mx-1">
          <img src="/roedor.png" alt="" />
        </div>
        <p className="font-[family-name:var(--font-be-vietnam-regular)]">Roedores</p>
      </div>
    </div>
  )
}
