import { useState } from "react";
import QuestionPreviewDrawer from "./QuestionPreviewDrawer";
import { Plus, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useQuestionStore } from "@/store/useQuestionStore";


export default function UploadBulkQuestions(){
    const navigate = useNavigate()
    const [year, setYear] = useState(2017)
    const {setQuestions} = useQuestionStore()
    const [subject, setSubject] = useState("")
    const [bulkQuestions, setBulkQuestions] = useState("")
    const [questionType, setQuestionType] = useState("multiple_choice")
    const [choices, setChoices] = useState([
            {label: "A", text: ""},
            {label: "B", text: ""},
            {label: "C", text: ""},
            {label: "D", text: ""},
    ])

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!subject) return toast.error("Can't create a question with out subject", {description: "Please select one subject!"})
        if(!bulkQuestions) return toast.error("Can't create a question with empty form!")
        
        const questions = bulkQuestions.split("---")
        questions.forEach(question => {
            const components = question.split("###")
            if(components.length < 3) return toast.error("you need question and choice and explanation to formulate a question!")
            const options = components[1].split("|")      
            const newOptions = choices.map((choice, i) => {
                return (
                    {...choice, text: options[i]}
                )
            })
            const data = {
                unit_id: null,
                question_type: questionType,
                question_text: components[0],
                year: year,
                question_rich: {
                    options: newOptions,
                    question: components[0],
                    explanation: {
                        text: components[3],
                        why_not_others: components[4].split("|")
                    },
                    correct_answer: components[2],
                    amharic_explanation: components[5],
                    related_topics: components[6].split("|")
                },
                subject: subject
            }
            setQuestions(data)
        })
        toast.success("Added All New question", {description: "You can see the questions in the preview."})
        setBulkQuestions("")    
    }


    return <div className="flex p-3 m-2 h-[95vh] overflow-hidden flex-col gap-5 bg-base-300 border-slate-500 border rounded-xl">
        <div className="header flex flex-col gap-3">
            <div className="flex flex-col gap-2">
                <div className="title text-2xl font-semibold">Upload question in bulk</div>
                <div className="description text-sm">The question should be in this format: </div>
            </div>

            {/* meta informations */}
             <div className="flex flex-col overflow-hidden gap-3 flex-wrap pl-1 pr-1">
                <div ><QuestionPreviewDrawer year={year} subject={subject || "No subject!"} /></div>

                <div className="flex justify-between gap-5"> 
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
            </div>
        </div>


        <div className="form h-full">

            <form onSubmit={handleSubmit} className="flex flex-col h-full justify-around gap-4">
                {/* copy/paste textarea */}
                <div className="flex flex-col gap-2">
                    <label htmlFor="bulk-upload" className="font-bold">Questions</label>
                    <textarea name="" id="bulk-upload" 
                    value={bulkQuestions}
                    onChange={(e) => setBulkQuestions(e.target.value)}
                    placeholder="Paste all your question here in the correct format!" 
                    className="min-h-36 input mb-4"
                    ></textarea>
                </div>

                {/* upload file are */}
                <div className="flex flex-col gap-2">
                    <label htmlFor="file-upload" 
                    className="bg-base-100 flex justify-center items-center h-28 border-2 rounded-lg border-slate-500 w-2/3 ">
                        <div className="flex flex-col gap-1 items-center">
                            <Plus  size={40}/>
                            <div>Upload your file!</div>
                        </div>
                    </label>
                    <input type="file" id="file-upload" className="min-h-36 hidden input mb-4" />
                </div>

                {/* submit button area */}
                <div className="flex items-center gap-2">
                    <button type="submit" className="btn w-2/3 btn-sm btn-success">Submit</button>
                    <button type="button" onClick={() => navigate("/")} className="btn w-1/3 btn-sm btn-outline">Cancel</button>
                </div>
            </form>

        </div>
    </div>
}