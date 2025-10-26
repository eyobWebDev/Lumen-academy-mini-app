

export default function QuestionPreviewCard({question}){
    console.log("question", question);
    

    return <div className="bg-base-300 rounded-xl flex flex-col gap-2 border-slate-500 border p-2">

        <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
                <div className="font-bold">Question</div>
                <div className="opacity-70 text-xs">{question.subject} from {question.year}</div>
            </div>
            <div className="flex items-center gap-2">
                <button className="btn btn-xs btn-success">Edit</button>
                <button className="btn btn-xs btn-error">Delete</button>
            </div>
        </div>
        <div className="text mt-2 mb-2 font-semibold">{question.question_text}</div>

        <div className="flex flex-wrap items-center gap-2">
            {question.question_rich?.options.map(choice => {
                return <div className="flex gap-3">
                    <div className="font-bold">{choice.label}.</div>
                    <div>{choice.text}</div>
                </div>
            })}
        </div>

    </div>
}