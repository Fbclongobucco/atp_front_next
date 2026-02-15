import { CardCreate } from "@/presentation/my-components/card-create";

export default function AdminPage() {
    return (
        <div className="w-full min-h-screen flex justify-center items-center">
            <div className="md:w-3/4 md:h-[calc(100vh-100px)] flex flex-col bg-slate-300 rounded-lg">
                <h2 className="m-4 p-2  text-2xl font-semibold text-cyan-800 bg-zinc-100 rounded-lg uppercase">Painel Admin Atp App</h2>

                <div className="grid grid-cols-2 gap-4 p-4">
                    <CardCreate />
                  
                </div>
            </div>
        </div>
    )
}