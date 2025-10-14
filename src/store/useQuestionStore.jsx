
import { create } from "zustand";

export const useQuestionStore = create((set, get) => ({
    questions: [],

    setQuestions: (data) => {
        set({questions: [...get().questions, data]})
    },
    removeQuestion: (data) => {
        set({questions: get().questions.filter(question => question.question_text != data)})
    }
}))