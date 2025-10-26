import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import CreateQuestionForm from './components/CreateQuestionForm'
import { Route, Routes } from 'react-router-dom'
import CreateQuestionPage from './pages/CreateQuestionPage'
import QuestionDisplayPage from './pages/QuestionDisplayPage'
import { Toaster } from 'sonner'
import HomePage from './pages/HomePage'
import UploadBulkQuestions from './components/UploadBulkQuestions'
import { useQuestionStore } from './store/useQuestionStore'
import DisplayAllQuestions from './components/DisplayAllQuestions'
import 'katex/dist/katex.min.css'

function App() {
  const [questions, setQuestions] = useState([])
  const {getAllQuestions} = useQuestionStore()

  useEffect(() => {
    getAllQuestions()
  }, [])


  return (
    <div className='bg-base-100 text-base'>
      
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/create' element={<CreateQuestionPage />} />
        <Route path='/question' element={<QuestionDisplayPage />} />
        <Route path='/bulk-upload' element={<UploadBulkQuestions />} />
        <Route path='/display-question' element={<DisplayAllQuestions />} />
      </Routes>

      <Toaster richColors position="top-right" closeButton />
    </div>
  )
}

export default App
