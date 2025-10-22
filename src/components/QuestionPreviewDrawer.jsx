import QuestionCard from "./QuestionCard";
import {Drawer,  DrawerClose,  DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger } from "./ui/drawer";
import { Loader2, Menu, X } from "lucide-react";
import { ScrollArea } from "./ui/scroll-area";
import { useQuestionStore } from "@/store/useQuestionStore";
import supabase from "@/config/supabase_client";
import { toast } from "sonner";
import { useState } from "react";


export default function QuestionPreviewDrawer({year, subject}){
    const {questions} = useQuestionStore()
    const [loading, setLoading] = useState(false)

    const handleClick = async () => {
        if(subject == "") return toast.error("please select a subject")
        setLoading(true)
        console.log("questions", questions);
        const {data, error } = await supabase.from("questions").insert(questions) 
        console.log("data", data)
        
        setLoading(false)
        if(error) return toast.error(error.name, {description: error.message})
        toast.success("Questions Uploaded Succesfully!")
    }

    return <Drawer direction='left'>
        <DrawerTrigger className="flex gap-3 items-center"><Menu size={15} /> Preview </DrawerTrigger>
        
        
        <DrawerContent className={`w-11/12 h-full text-blue-100 border bg-base-300`}>
            <ScrollArea className={`h-[100vh] overflow-x-scroll`}>

                <DrawerHeader className={`flex justify-between`}>
                    <DrawerTitle>Preview the question</DrawerTitle>
                    <DrawerClose asChild>
                        <X />
                    </DrawerClose> 
                </DrawerHeader>

                <DrawerDescription>
                    <div className="flex items-center gap-4 justify-between pl-5  pr-5">
                        <div className="flex p-2 bg-base-100 rounded shadow-slate-700 shadow-sm items-center gap-3 font-semibold ">
                            <div>Subject :</div><div>{subject}</div>
                        </div>
                        <div className="flex bg-base-100 rounded p-2 shadow-sm shadow-slate-700 items-center gap-3 font-semibold ">
                            <div>Year :</div><div>{year}</div>
                        </div>
                    </div>
                </DrawerDescription>

                {
                    questions.length > 0 ?
                    <><div className="mt-10 p-2 flex flex-col gap-5">
                        {questions.map(q => {
                            return <QuestionCard q={q} state={true} />;
                        })}
                    </div><div className="mt-5 p-2">
                            <button onClick={handleClick} className="btn w-full btn-success">
                                {!loading ? `Upload All ${questions.length} Question` : <Loader2 className="animate-spin" />}
                            </button>
                        </div></> : <div className="text-xl text-center mt-10">
                            No Questions added yet!
                        </div>
                }


                

            </ScrollArea>
        </DrawerContent>
    </Drawer>
}
