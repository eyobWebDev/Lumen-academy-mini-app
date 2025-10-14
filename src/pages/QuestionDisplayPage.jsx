import QuestionCard from "@/components/QuestionCard";
import supabase from "@/config/supabase_client";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { toast } from "sonner";


export default function QuestionDisplayPage() {
    const { search } = useLocation()
    const [questions, setQuestions] = useState([])
    const [loading, setLoading] = useState(false)
    const query = new URLSearchParams(search);
    const unit_id = query.get("unit_id");
    const year = query.get("year");
    const subject = query.get("subject");

    const getQuestions = async () => {
        setLoading(true)
        const { data, error } = await supabase
        .from("questions")
        .select("*")
        .eq("year", year)
        .eq("subject", subject);
        if(error) return toast.error(error)
            
        setQuestions(data)
        setLoading(false)
    }


    useEffect(() => {
        getQuestions()
    }, [])

    return <div className="flex flex-col gap-3 p-3">
        <div className="text-center font-semibold text-xl">{subject} Questions from Year {year}.</div>

        <div className="flex flex-col gap-3">
            { loading ? <div className="flex flex-col items-center gap-3">
                    <Loader2 className="animate-spin" />
                    <div>Getting all questions...</div>
            </div> :
                questions.map(question => {
                    return <QuestionCard q={question} />
                })
            }

        </div>
    </div>
}