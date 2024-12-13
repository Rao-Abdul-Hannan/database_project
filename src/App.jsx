import React from "react"
import NavBar from "./layout/NavBar"
import Footer from "./layout/Footer"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import ErrorPage from "./pages/ErrorPage"
import FacultyData from "./pages/FacultyData"
import ClassData from "./pages/ClassData"
import FeeVoucher from "./pages/FeeVoucher"
import SpecificStudentData from "./pages/SpecificStudentData"
import SpecificTeacherData from "./pages/SpecificTeacherData"
import StudentData from "./pages/StudentData"
import StudentMarksheet from "./pages/StudentMarksheet"
import TakeAttendance from "./pages/TakeAttendance"
import AdminLoginForm from "./views/forms/adminLoginForm"
import AdminSignUpForm from "./views/forms/adminSignUpForm"

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<AdminSignUpForm />} />
        <Route path='/login-form' element={<AdminLoginForm />} />
        <Route path="/home" element={<Home />} />
        <Route path='/faculty-data' element={<FacultyData />} />
        <Route path='/class-data' element={<ClassData />} />
        <Route path='/fee-voucher' element={<FeeVoucher />} />
        <Route path='/specific-student-data' element={<SpecificStudentData />} />
        <Route path='/specific-teacher-data' element={<SpecificTeacherData />} />
        <Route path='/student-data' element={<StudentData />} />
        <Route path='/student-marksheet' element={<StudentMarksheet />} />
        <Route path='/take-attendance' element={<TakeAttendance />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
