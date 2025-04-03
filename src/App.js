
import React from 'react'
import TeacherList from './phanreact/context/TeacherList'
import { Route, Routes } from 'react-router-dom'
import TeacherDetail from './phanreact/context/TeacherDetail'
import ModifyeTeacher from './phanreact/context/ModifyeTeacher'
import Spinner from './phanreact/context/Spinner'

function App() {
  return (
    <div className="container">
      <Spinner/>
      <Routes>
        <Route path='/' element={<TeacherList/>}/>
        <Route path='/teacher' element={<TeacherList/>}/>
        <Route path='/teacher/:teacherId' element={<TeacherDetail/>}/>
        <Route path='/teacher/modify/:teacherId' element={<ModifyeTeacher/>}/>
      </Routes>
    </div>
  )
}

export default App

