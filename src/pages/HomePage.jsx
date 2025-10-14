import { ArrowRight, Menu } from "lucide-react"
import LumenAcademyLogo from "../assets/lumen_academy_logo.jpg"
import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"

export default function HomePage(){
    const navigate = useNavigate()
    const [year, setYear] = useState(2017)   
    const [subject, setSubject] = useState("")   
    const { search } = useLocation()
    const [questions, setQuestions] = useState([])
    const query = new URLSearchParams(search);
    const unit_id = query.get("unit_id");
    const y = query.get("year");
    const s = query.get("subject");

    useEffect(() => {
      if(y && s){
         navigate(`/question?year=${y}&subject=${s}`)
       }
    }, [])

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

        <div className="flex items-center mt-2 gap-3">
            <input type="text" className="input input-bordered input-sm" placeholder="subject" value={subject} onChange={(e) => setSubject(e.target.value)} />
            <input type="number" className="input input-bordered input-sm" placeholder="year" value={year} onChange={(e) => setYear(e.target.value)}/>
            <button onClick={() => navigate(`/question?year=${year}&subject=${subject}`)} className="btn btn-info btn-sm flex items-center gap-3">Go <ArrowRight size={15} /></button>
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
