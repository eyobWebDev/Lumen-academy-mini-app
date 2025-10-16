import { useQuestionStore } from "@/store/useQuestionStore"
import { Trash2 } from "lucide-react"


export default function QuestionCard({q, state}){
    const {removeQuestion} = useQuestionStore()

    return <div className={`flex ${state ? "" : "m-1 bg-base-300"} bg-base-100 rounded-xl p-5 shadow shadow-slate-700 flex-col gap-3`}>
        {/* question */}
        <div className="flex flex-col gap-1">
            <div className="flex justify-between items-center">
                <div className="text-lg font-bold">Question</div>
                {state && <div><button onClick={() => removeQuestion(q.question_text)} className="btn btn-xs btn-error"><Trash2 size={10} />Remove</button></div>}
            </div>
            <div>{q.question_rich.question || ""}</div>
        </div>

        {/* answer */}
        <div className="flex flex-col gap-1">
            <div className="text-sm font-bold">Answer</div>
            <div className="flex flex-col gap-2">
                {q.question_rich.options?.map(option => {
                    return <div className="flex gap-2">
                        <div className="font-semibold">{option.label}.</div>
                        <div>{option.text}</div>
                    </div>
                })}
            </div>
        </div>

        <hr className="opacity-50" />

        {/* correct answer */}
        <div className="flex p-2 items-center font-semibold gap-3">
            <div>{q.question_rich.correct_answer || ""}</div>
        </div>

        {/* explanation */}
        <div className="flex break-words flex-col gap-1">
            <div className="text-lg font-semibold">Explanation</div>
            <div>{q.question_rich.explanation.text || ""}</div>
        </div>

        {/* why not others */}
        {q.question_rich.explanation.why_not_others.length > 1 &&  <div className="flex break-words flex-col gap-1">
            <div className="text-lg font-semibold">Why not the others</div>
            <div className="flex flex-col gap-2">{q.question_rich.explanation.why_not_others.map(s => {
                return <li>{s}</li>
            }) || ""}</div>
        </div>}

        {/* Amharic explantion */}
        {q.question_rich.amharic_explanation &&  <div className="flex break-words flex-col gap-1">
            <div className="text-lg font-semibold">Amharic Explanation</div>
            <div className="flex flex-col gap-2">{q.question_rich.amharic_explanation || ""}</div>
        </div>}
        
        {/* related topics */}
        {q.question_rich.related_topics.length > 1 &&  <div className="flex break-words flex-col gap-1">
            <div className="text-lg font-semibold">Related Topics</div>
            <div className="flex flex-col gap-2">{q.question_rich.related_topics.map(s => {
                return <li>{s}</li>
            }) || ""}</div>
        </div>}
        
    </div>
}
