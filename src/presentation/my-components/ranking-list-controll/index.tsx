import { ArrowLeft, ArrowRight } from "lucide-react"

interface RankingListControllProps {
    nextPage: () => void
    prevPage: () => void
    reSize: (size: number) => void
    page: number
    size: number
    totalPages: number
}

export function RankingListControll({ nextPage, prevPage, reSize, page, size, totalPages }: RankingListControllProps) {

    return (
        <div className="flex flex-col gap-2 w-md lg:w-2xl mt-25 mb-2 bg-slate-200 rounded-md">
            <h2 className="font-semibold text-2xl text-slate-600 p-2">ATP <span className="text-lg italic font-bold text-blue-400 tracking-wide">RANKING</span></h2>
            <div className="flex justify-between mx-2 pb-4">
                <button onClick={prevPage} className="w-10 h-10 rounded-full bg-slate-400 flex items-center justify-center cursor-pointer border border-slate-500 shadow-lg">

                    < ArrowLeft size={22} color="#302e46" />
                </button>
                <div className="flex justify-center items-center text-slate-600">
                    <p className="font-medium text-md mr-2 bg-slate-300 rounded p-1 border border-slate-400">pagina {page + 1}</p>
                    <select
                        value={size}
                        onChange={(e) => reSize(Number(e.target.value))}
                        className="font-medium text-md bg-slate-300 rounded p-1 border border-slate-400 focus:outline-none cursor-pointer"
                    >
                        <option value={10}>10 jogadores</option>
                        <option value={20}>20 jogadores</option>
                        <option value={50}>50 jogadores</option>
                    </select>
                </div>
                <button disabled={page > totalPages} onClick={nextPage} className="w-10 h-10 rounded-full bg-slate-400 flex items-center justify-center border border-slate-500 shadow-lg
                cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 ">
                    <ArrowRight size={22} color="#302e46" />
                </button>
            </div>
        </div>
    )
}