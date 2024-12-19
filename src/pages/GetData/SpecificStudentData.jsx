import React, { useEffect, useState } from "react";
import { endPoints } from "../../constants/urls/urls";
import getApiService from "../../services/getApiService";
import { Link, useNavigate, useParams } from "react-router-dom";
import studentImg from "../../assets/Images/th.jpeg";
import "../../style/form.css";

const SpecificStudentData = () => {
	const navigate = useNavigate();

	const authTokenAdmin = localStorage.getItem("authTokenAdmin");
		useEffect(() => {
			if (!authTokenAdmin) {
				navigate("/auth/sign-in");
			}
		}, [authTokenAdmin]);

	const [student, setStudent] = useState({});

	const studentId = useParams();
	const id = studentId.id;

	const fetchStudent = async () => {
		try {
			// Include the authToken in the request headers
			// const config = {
			// 	headers: {
			// 		Authorization: `Bearer ${authTokenAdmin}`,
			// 		"Content-Type": "application/json",
			// 	},
			// };

			const response = await getApiService(
				`${endPoints.SPECIFIC_STUDENT}/${id}`
				// config
			);
			console.log(response.data.data);
			setStudent(response.data.data);
		} catch (error) {
			// Log any errors that occur during the fetch
			console.log(error);
		}
	};

	useEffect(() => {
		fetchStudent();
	}, []);

	return (
		<>
			<div className="image-form">
				<div className="form-style-container">
					<h2 className="py-3">Student Information</h2>
					<form className="faculty-form">
						<div className="form-row">
							<label>Student ID:</label>
							<span>{student.student_id}</span>
						</div>
						<div className="form-row">
							<label>First Name:</label>
							<span>{student.s_first_name}</span>
						</div>
						<div className="form-row">
							<label>Middle Name:</label>
							<span>{student.s_middle_name}</span>
						</div>
						<div className="form-row">
							<label>Last Name:</label>
							<span>{student.s_last_name}</span>
						</div>
						<div className="form-row">
							<label>Address:</label>
							<span>{student.s_address}</span>
						</div>
						<div className="form-row">
							<label>Section ID:</label>
							<span>{student.section_id}</span>
						</div>
						<div className="form-row">
							<label>Date of Birth:</label>
							<span>
								{student.date_of_birth &&
									new Date(
										student.date_of_birth
									).toLocaleDateString()}
							</span>
						</div>
						<div className="form-row">
							<label>Gender:</label>
							<span>{student.Gender}</span>
						</div>
						<div className="form-row">
							<label>Status:</label>
							<span>{student.Status}</span>
						</div>
					</form>
				</div>
				<div className="img-teacher">
					<img
						src={studentImg}
						alt="student-image"
					/>
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

export default SpecificStudentData;
