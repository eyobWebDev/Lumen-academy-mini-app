import CreateQuestionForm from "../components/CreateQuestionForm";


export default function CreateQuestionPage(){

    return <div className="flex flex-col p-3 gap-4">
        <div className="text-2xl text-center font-semibold">Create a Question.</div>

        <CreateQuestionForm />
    </div>
}