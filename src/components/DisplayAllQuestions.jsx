import { useQuestionStore } from "@/store/useQuestionStore"
import QuestionPreviewCard from "./QuestionPreviewCard"
import { Loader2 } from "lucide-react"


export default function DisplayAllQuestions(){
    const {pulledQuestions, isGettingQuestion} = useQuestionStore()

    if (isGettingQuestion) {
        return <div className="flex h-[100vh] w-full justify-center items-center">
            <div className="flex items-center flex-col gap-4">
                <Loader2 size={30} className="animate-spin" />
                <div>Getting all question...</div>
            </div>
        </div>
    }

    return <div className="flex flex-col gap-4">
        <div className="text-2xl">{pulledQuestions.length > 0  && "All questions"}</div>

        {pulledQuestions.length > 0 ? <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 flex-wrap">
            {
                pulledQuestions.map(question => {
                    return <QuestionPreviewCard question={question} />
            })}
        </div> : <div className="flex h-[100vh] w-full justify-center items-center">
            <div className="text-2xl">No Questions!</div>
        </div>}

    </div>
}