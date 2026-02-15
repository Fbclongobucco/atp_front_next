import { Search } from "lucide-react"
import Image from "next/image"

interface HeaderProps {
    onSearchClick?: () => void
}

export function Header({onSearchClick}: HeaderProps) {

    
    return (
        <header className="w-full h-24 bg-cyan-950 flex items-center justify-center fixed top-0 z-30">
            <div className="w-6xl mx-4 flex items-center justify-between">
                <div className="bg-slate-200 p-2 rounded-2xl">
                    <Image src="/assets/ATP_tour_logo.png" alt="logo" width={100} height={100} />
                </div>
                <button onClick={onSearchClick} className="w-10 h-10 rounded-full bg-slate-400 flex items-center justify-center cursor-pointer">
                    <Search  size={22} color="#302e46" />
                </button>
            </div>
        </header>
    )
}