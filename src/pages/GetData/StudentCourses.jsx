import React, { useEffect, useState } from "react";
import { endPoints } from "../../constants/urls/urls";
import getApiService from "../../services/getApiService";
import { Link, useParams } from "react-router-dom";
import "../../style/transcript.css";

const StudentCourses = () => {
	const [studentCourses, setStudentCourses] = useState([]);
	const [studentName, setStudentName] = useState("");

	const studentId = useParams();
	const id = studentId.id;
	const fetchStudentCourses = async () => {
		try {
			// Include the authToken in the request headers
			// const config = {
			// 	headers: {
			// 		Authorization: `Bearer ${authTokenAdmin}`,
			// 		"Content-Type": "application/json",
			// 	},
			// };

			const response = await getApiService(
				`${endPoints.STUDENT_COURSES}/${id}`
				// config
			);
			if (response.data.success) {
				setStudentCourses(response.data.data);
				// console.log(studentTranscript[0].student_name)
				if (studentCourses.length > 0) {
					setStudentName(studentCourses[0].student_name);
				}
			}
		} catch (error) {
			// Log any errors that occur during the fetch
			console.log(error);
		}
	};

	useEffect(() => {
		fetchStudentCourses();
	}, []);
	return (
		<>
			<div className="transcript-container">
				<h2 style={{ paddingTop: 20, paddingBottom: 30 }}>
					<strong>Subjects for:</strong>
					{studentName}
				</h2>
				<div className="transcript-cards">
					{studentCourses.map((item, index) => (
						<div
							key={index}
							className='card pass'
						>
							<h3>{item.subject_name}</h3>
						</div>
					))}
				</div>
			</div>
			<div className="goback-button">
				<button
					type="submit"
					className="form-floating mb-3 button-styling"
				>
					<Link
						to="/home"
						className="go-home-styling"
					>
						Go Home!
					</Link>
				</button>
			</div>
		</>
	);
};

export default StudentCourses;
