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

function App() {
  const [questions, setQuestions] = useState([])


  return (
    <div className='bg-base-100 text-base'>
      
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/create' element={<CreateQuestionPage />} />
        <Route path='/question' element={<QuestionDisplayPage />} />
        <Route path='/bulk-upload' element={<UploadBulkQuestions />} />
      </Routes>

      <Toaster richColors position="top-right" closeButton />
    </div>
  )
}

export default App
