export default function Header() {
    return(
        <header className="z-50 h-16 w-full bg-gradient-to-r from bg-orange-500 to orange-700 items-center flex flex-initial text-3xl fixed shadow-lg justify-between">
            <div className="flex flex-rol items-center">
            <div className="ml-5"><img className="w-12" src="/logo.png" alt="" /></div>
            <div className="ml-4"><img className="w-24" src="/CADU.png" alt="" /></div>
            </div>
            <div className="flex flex-rol items-center">
            <div className="mr-5"><img className="w-8" src="/profile.png" alt="" /></div>
            <div className="mr-5"><img className="w-8" src="/menu.png" alt="" /></div>
            </div>
        
        </header>
    )
}