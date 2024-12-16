import React from "react";
import NavBar from "./layout/NavBar";
import Footer from "./layout/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import FacultyData from "./pages/GetData/FacultyData";
import ClassRoomData from "./pages/GetData/ClassRoomData";
import SpecificStudentData from "./pages/GetData/SpecificStudentData";
import SpecificTeacherData from "./pages/GetData/SpecificTeacherData";
import StudentData from "./pages/GetData/StudentData";
import AdminLoginForm from "./views/forms/adminLoginForm";
import AdminSignUpForm from "./views/forms/adminSignUpForm";
import MonthlyFeeData from "./pages/GetData/MonthlyFeeData";
import AttendanceData from "./pages/GetData/AttendanceData";
import EventsData from "./pages/GetData/EventsData";
import ExamData from "./pages/GetData/ExamData";
import ExamResultData from "./pages/GetData/ExamResultData";
import ParentData from "./pages/GetData/ParentData";
import PeriodData from "./pages/GetData/PeriodData";
import RoomData from "./pages/GetData/RoomData";
import StudentEventData from "./pages/GetData/StudentEventData";
import SubjectData from "./pages/GetData/SubjectData";
import SectionData from "./pages/GetData/SectionData";
import SearchStudent from "./views/forms/SearchStudent";
import AdmissionData from "./pages/GetData/AdmissionData";
import MoreFunctions from "./pages/MoreFunctions";
import StudentTranscript from "./pages/GetData/StudentTranscript";
import StudentCourses from "./pages/GetData/StudentCourses";
import TeacherTeachingSections from "./pages/GetData/TeacherTeachingSections";
import StudentParticipations from "./pages/GetData/StudentParticipations";

function App() {
	return (
		<>
			<NavBar />
			<Routes>
				<Route
					path="/"
					element={<AdminSignUpForm />}
				/>
				<Route
					path="/auth/admin-login"
					element={<AdminLoginForm />}
				/>
				<Route
					path="/home"
					element={<Home />}
				/>
				<Route
					path="/faculty-data"
					element={<FacultyData />}
				/>
				<Route
					path="/admission-data"
					element={<AdmissionData />}
				/>
				<Route
					path="/monthly-fee"
					element={<MonthlyFeeData />}
				/>
				<Route
					path="/search"
					element={<SearchStudent />}
				/>
				<Route
					path="/specific-student-data/:id"
					element={<SpecificStudentData />}
				/>
				<Route
					path="/specific-teacher-data/:id"
					element={<SpecificTeacherData />}
				/>
				<Route
					path="/student-data"
					element={<StudentData />}
				/>
				<Route
					path="/student-transcript/:id"
					element={<StudentTranscript />}
				/>
				<Route
					path="/attendance-data"
					element={<AttendanceData />}
				/>
				<Route
					path="/classroom-data"
					element={<ClassRoomData />}
				/>
				<Route
					path="/events-data"
					element={<EventsData />}
				/>
				<Route
					path="/exam-data"
					element={<ExamData />}
				/>
				<Route
					path="/exam-result-data"
					element={<ExamResultData />}
				/>
				<Route
					path="/parent-data"
					element={<ParentData />}
				/>
				<Route
					path="/period-data"
					element={<PeriodData />}
				/>
				<Route
					path="/room-data"
					element={<RoomData />}
				/>
				<Route
					path="/section-data"
					element={<SectionData />}
				/>
				<Route
					path="/student-event-data"
					element={<StudentEventData />}
				/>
				<Route
					path="/subject-data"
					element={<SubjectData />}
				/>
				<Route
					path="/student-courses/:id"
					element={<StudentCourses />}
				/>
				<Route
					path="/teacher-teaching-sections/:id"
					element={<TeacherTeachingSections />}
				/>
				<Route
					path="/student-participations"
					element={<StudentParticipations />}
				/>
				<Route
					path="/more-functions"
					element={<MoreFunctions />}
				/>
				<Route
					path="*"
					element={<ErrorPage />}
				/>
			</Routes>
			<Footer />
		</>
	);
}

export default App;
