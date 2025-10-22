import { useState } from "react"
import { toast } from "sonner"
import QuestionPreviewDrawer from "./QuestionPreviewDrawer"
import { useQuestionStore } from "../store/useQuestionStore"


export default function CreateQuestionForm(){
    const {setQuestions, questions} = useQuestionStore()
    const [questionType, setQuestionType] = useState("multiple_choice")
    const [correctAnswer, setCorrectAnswer] = useState("")
    const [questionText, setQuestionText] = useState("")
    const [choice, setChoice] = useState("")
    const [year, setYear] = useState(2017)
    const [subject, setSubject] = useState("")
    const [explanation, setExplanation] = useState("")
    const [relatedTopics, setRelatedTopics] = useState("")
    const [amharicExplanation, setAmharicExplanation] = useState("")
    const [whyNotOthers, setWhyNotOthers] = useState("")
    const [choices, setChoices] = useState([
        {label: "A", text: ""},
        {label: "B", text: ""},
        {label: "C", text: ""},
        {label: "D", text: ""},
    ])

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(!questionText) return  toast.error("You need a question text to create.")
        if(!choice) return toast.error("yu need to have list of choices to create!")
        if(!subject) return toast.error("please select a subject.")

        const options = choice.split("|")        
        const newOptions = choices.map((choice, i) => {
            return (
                {...choice, text: options[i]}
            )
        })
        
        setChoices(newOptions)
        
        const data = {
            unit_id: null,
            question_type: questionType,
            question_text: questionText,
            year: year,
            question_rich: {
                options: newOptions,
                question: questionText,
                explanation: {
                    text: explanation,
                    why_not_others: whyNotOthers.split("|")
                },
                correct_answer: correctAnswer,
                amharic_explanation: amharicExplanation,
                related_topics: relatedTopics.split("|")
            },
            subject: subject
        }

        setQuestions(data)
        toast.success("Added New question", {description: "You can see the questions in he preview."})
        setCorrectAnswer("")
        setQuestionText("")
        setChoice("")
        setExplanation("")
        setAmharicExplanation("")
        setWhyNotOthers("")
        setRelatedTopics("")
        console.log("questions", questions);
        
    }

    return <div className="border lg:text-xl text-xs border-white border-opacity-30 lg:m-5 m-1 bg-base-200 p-4 rounded-xl pl-5 pr-5">

        <div className="flex justify-between items-center mb-4 flex-wrap pl-1 pr-1">
             <div ><QuestionPreviewDrawer year={year} subject={subject || "No subject!"} /></div>
            <select className="text-sm input-sm input" name="Choose subject" id="" value={subject} 
            onChange={(e) =>{
                console.log("changed");
                 setSubject(e.target.value)
            }} >
                <option value="Maths">Maths</option>
                <option value="English">English</option>
                <option value="Chemistry">Chemistry</option>
                <option value="Physics">Physics</option>
                <option value="Biology">Biology</option>
                <option value="Apptitude">Apptitude</option>
            </select>

            <input type="text" className="input input-sm" value={year} onChange={(e) => setYear(e.target.value)} />
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col opacity-100 lg:p-2 p-0 gap-3">

            <div className="form-control flex flex-col p-1 gap-1.5">
                <label htmlFor="question_type" className="font-semibold">Question Type</label>
                <input  id="question_type" type="text" className="input input-bordered" value={questionType}  />
            </div>

            <div className="form-control flex flex-col p-1 gap-1.5">
                <label htmlFor="question_text" className="font-semibold">Question Text</label>
                <input  id="question_text" type="text" className="input input-bordered" value={questionText} onChange={(e) => setQuestionText(e.target.value)} placeholder="e.g what is your name?"  />
            </div>

            <div className="form-control flex flex-col p-1 gap-1.5">
                <label htmlFor="choice" className="font-semibold">Choice</label>
                <input  id="choice" type="text" className="input input-bordered" value={choice} onChange={(e) => setChoice(e.target.value)} placeholder="paste your answer separated by | "  />
            </div>

            <div className="form-control flex flex-col p-1 gap-1.5">
                <label htmlFor="correct_answer" className="font-semibold">Correct Answer</label>
                <input  id="correct_answer" type="text" className="input input-bordered" value={correctAnswer} onChange={(e) => setCorrectAnswer(e.target.value)} placeholder="write you correct answer here A, B. C or D"  />
            </div>

            <div className="form-control flex flex-col p-1 gap-1.5">
                <label htmlFor="explanation" className="font-semibold">Explanation</label>
                <textarea  id="explanation" type="text" className="input min-h-40 max-h-200 input-bordered" value={explanation} onChange={(e) => setExplanation(e.target.value)} placeholder="write you explanation here"  ></textarea>
            </div>

            <div className="form-control flex flex-col p-1 gap-1.5">
                <label htmlFor="why_not_others" className="font-semibold">Why Not Others (optional)</label>
                <textarea  id="why_not_others" type="text" className="input h-20 input-bordered" value={whyNotOthers} onChange={(e) => setWhyNotOthers(e.target.value)} placeholder="write why the other choice aren't the answer and seperate them by |"></textarea>
            </div>

            <div className="form-control flex flex-col p-1 gap-1.5">
                <label htmlFor="amharic_explanation" className="font-semibold">Amharic Explanation (optional)</label>
                <input  id="amharic_explanation" type="text" className="input input-bordered" value={amharicExplanation} onChange={(e) => setAmharicExplanation(e.target.value)} placeholder="write you explanation here"  />
            </div>

            <div className="form-control opacity-100 flex flex-col p-1 gap-1.5">
                <label htmlFor="related_topics" className="font-semibold">Related Topics (optional)</label>
                <textarea  id="related_topics" type="text" className="input h-20 input-bordered" value={relatedTopics} onChange={(e) => setRelatedTopics(e.target.value)} placeholder="write related topics and seperate them by |"></textarea>
            </div>

            <div className="flex items-center p-1 gap-4">
                <button type="submit" className="btn btn-success w-2/3">Create</button>
                <button type="button" className="btn btn-outline w-1/3">Cancel</button>  
            </div>

        </form>   
    </div>
}
