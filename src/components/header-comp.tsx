import Link from "next/link"
export default function Header1() {
    return(
        <header className="z-50 h-16 w-full bg-gradient-to-r from bg-orange-500 to orange-700 items-center flex flex-initial text-3xl fixed shadow-lg justify-between">
        <div className="flex flex-rol items-center">


        <Link href={'/'}>
          <button className="flex justify-self-center ml-6 rotate-180 text-4xl text-white">
            &#10140;
          </button>
            </Link>

        </div>

        <div className="flex flex-rol items-center ">
          <div className="mr-6">
            <Link href={'/'}>
              <img className="w-14" src="/logoSemDesc.png" alt="" />
            </Link>

          </div>
        </div>
      </header>
    )
}