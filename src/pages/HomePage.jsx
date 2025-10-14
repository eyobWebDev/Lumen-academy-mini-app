import { Menu } from "lucide-react"
import LumenAcademyLogo from "../assets/lumen_academy_logo.jpg"
import { useNavigate } from "react-router-dom"

export default function HomePage(){
    const navigate = useNavigate()

    return <div className="flex flex-col">
        <div className="flex w-full justify-between items-center sticky top-0 shadow-sm shadow-slate-700 p-2 bg-base-300">
            <div  className="flex items-center gap-4">
                <div className="h-10 w-10 relative rounded-full">
                    <img className="absolute h-full w-full object-cover rounded-full" src={LumenAcademyLogo} />
                </div>

                <div className="font-semibold text-lg">Lumen Academy</div>
            </div>

            <div><Menu size={15} /></div>
        </div>

        <div className="flex text-center justify-center overflow-hidden h-[90vh] flex-col gap-7">
            <div className="flex flex-col gap-4">
                <div className="text-2xl font-bold">Lumen Academy</div>
                <div className="text-sm opacity-70">
                    Illuminating minds through clear, practical, and inspiring lessons. Our mission is to make complex topics simple, engaging, and accessible.
                </div>
            </div>

            <div className="flex items-center justify-around">
                <button className="btn btn-sm btn-primary" onClick={() => navigate("/create")}>Create a question</button>
                <button className="btn btn-sm btn-link">See all questions</button>
            </div>
        </div>

    </div>
}