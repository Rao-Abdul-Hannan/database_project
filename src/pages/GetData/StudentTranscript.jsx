import React, { useEffect, useState } from "react";
import { endPoints } from "../../constants/urls/urls";
import getApiService from "../../services/getApiService";
import { Link, useNavigate, useParams } from "react-router-dom";
import "../../style/transcript.css";

const StudentTranscript = () => {
	const navigate = useNavigate();

	const authTokenAdmin = localStorage.getItem("authTokenAdmin");
	useEffect(() => {
		if (!authTokenAdmin) {
			navigate("/auth/sign-in");
		}
	}, [authTokenAdmin]);

	const [studentTranscript, setStudentTranscript] = useState([]);
	const [studentName, setStudentName] = useState("");

	const studentId = useParams();
	const id = studentId.id;

	const fetchStudentTranscript = async () => {
		try {
			// Include the authToken in the request headers
			// const config = {
			// 	headers: {
			// 		Authorization: `Bearer ${authTokenAdmin}`,
			// 		"Content-Type": "application/json",
			// 	},
			// };

			const response = await getApiService(
				`${endPoints.TRANSCRIPT}/${id}`
				// config
			);
			if (response.data.success) {
				setStudentTranscript(response.data.data);
				console.log(studentTranscript[0].student_name);
				if (studentTranscript.length > 0) {
					setStudentName(studentTranscript[0].student_name);
				}
			}
		} catch (error) {
			// Log any errors that occur during the fetch
			console.log(error);
		}
	};

	useEffect(() => {
		fetchStudentTranscript();
	}, []);
	return (
		<>
			<div className="transcript-container">
				<h2 style={{ paddingTop: 20, paddingBottom: 30 }}>
					<strong>Transcript for:</strong>
					{studentName}
				</h2>
				<div className="transcript-cards">
					{studentTranscript.map((item, index) => (
						<div
							key={index}
							className={`card ${
								item.Grade === "F" ? "fail" : "pass"
							}`}
						>
							<h3>{item.subject_name}</h3>
							<p>
								<strong>Marks Obtained:</strong>{" "}
								{item.marks_obtained}
							</p>
							<p>
								<strong>Grade:</strong> {item.Grade}
							</p>
							<p>
								<strong>Exam Date:</strong>{" "}
								{new Date(item.exam_date).toLocaleDateString()}
							</p>
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

export default StudentTranscript;
