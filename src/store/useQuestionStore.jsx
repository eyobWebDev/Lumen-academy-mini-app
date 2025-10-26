
import supabase from "@/config/supabase_client";
import { create } from "zustand";

export const useQuestionStore = create((set, get) => ({
    questions: [],
    pulledQuestions: [],
    isGettingQuestion: false,

    setQuestions: (data) => {
        set({questions: [...get().questions, data]})
    },
    removeQuestion: (data) => {
        set({questions: get().questions.filter(question => question.question_text != data)})
    }, 
    getAllQuestions: async () => {
        set({isGettingQuestion: true})
        console.log("getting all questions...");
        
        const { data, error } = await supabase
        .from('questions')
        .select('*') // selects all columns

        if (error) {
        console.error('Error fetching questions:', error)
        } else {
        console.log('Questions:', data)
        set({pulledQuestions: data})
        }
        
        set({isGettingQuestion: false})

    }
}))