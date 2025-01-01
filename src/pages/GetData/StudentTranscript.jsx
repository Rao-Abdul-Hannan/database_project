import React, { useEffect, useState } from "react";
import { endPoints } from "../../constants/urls/urls";
import getApiService from "../../services/getApiService";
import { Link, useNavigate, useParams } from "react-router-dom";
import "../../style/transcript.css";
import { useToast } from "@chakra-ui/react";

const StudentTranscript = () => {
	const navigate = useNavigate();
	const toast = useToast();

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
				toast({
					title: "Student Transcript",
					description: "Transcript shown successfully",
					status: "success",
					duration: 9000,
					isClosable: true,
				});
				setStudentTranscript(response.data.data);
				console.log(studentTranscript[0].student_name);
				if (studentTranscript.length > 0) {
					setStudentName(studentTranscript[0].student_name);
				}
			}
		} catch (error) {
			// Log any errors that occur during the fetch
			console.log(error);
			toast({
				title: "Error",
				description: error.response.data.message,
				status: "error",
				duration: 9000,
				isClosable: true,
			});
		}
	};

	useEffect(() => {
		fetchStudentTranscript();
	}, []);
	return (
		<>
			<div className="transcript-container">
				<h2>
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
