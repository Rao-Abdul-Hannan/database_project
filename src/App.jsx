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
import AdminLoginForm from "./views/forms/AdminLoginForm";
import AdminSignUpForm from "./views/forms/AdminSignUpForm";
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
import AddFunctions from "./pages/AddFunctions";
import StudentTranscript from "./pages/GetData/StudentTranscript";
import StudentCourses from "./pages/GetData/StudentCourses";
import TeacherTeachingSections from "./pages/GetData/TeacherTeachingSections";
import StudentParticipations from "./pages/GetData/StudentParticipations";
import CreateFunctions from "./pages/CreateFunctions";
import AddTeacher from "./pages/AddData/AddTeacher";
import AddStudent from "./pages/AddData/AddStudent";
import AddEvent from "./pages/AddData/AddEvent";
import UpdateFunctions from "./pages/UpdateFunctions";
import DeleteFunctions from "./pages/DeleteFunctions";
import DeleteTeacher from "./pages/DeleteData/DeleteTeacher";
import DeleteStudent from "./pages/DeleteData/DeleteStudent";
import DeleteEvent from "./pages/DeleteData/DeleteEvent";
import UpdateEvent from "./pages/UpdateData/UpdateEvent";
import UpdateTeacher from "./pages/UpdateData/UpdateTeacher";
import UpdateStudent from "./pages/UpdateData/UpdateStudent";
import Update from "./views/forms/Update";
import Delete from "./views/forms/Delete";

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
					path="/auth/sign-in"
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
					path="/update-search"
					element={<Update />}
				/>
				<Route
					path="/delete-search"
					element={<Delete />}
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
					path="/add-teacher"
					element={<AddTeacher />}
				/>
				<Route
					path="/add-student"
					element={<AddStudent />}
				/>
				<Route
					path="/add-event"
					element={<AddEvent />}
				/>
				<Route
					path="/update-student/:id"
					element={<UpdateStudent />}
				/>
				<Route
					path="/update-teacher/:id"
					element={<UpdateTeacher />}
				/>
				<Route
					path="/update-event/:id"
					element={<UpdateEvent />}
				/>
				<Route
					path="/delete-event/:id"
					element={<DeleteEvent />}
				/>
				<Route
					path="/delete-student/:id"
					element={<DeleteStudent />}
				/>
				<Route
					path="/delete-teacher/:id"
					element={<DeleteTeacher />}
				/>
				<Route
					path="/add-functions"
					element={<AddFunctions />}
				/>
				<Route
					path="/create-functions"
					element={<CreateFunctions />}
				/>
				<Route
					path="/update-functions"
					element={<UpdateFunctions />}
				/>
				<Route
					path="/delete-functions"
					element={<DeleteFunctions />}
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
