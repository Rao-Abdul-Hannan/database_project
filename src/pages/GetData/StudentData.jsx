import React, { useEffect, useRef, useState } from "react";
import getApiService from "../../services/getApiService";
import { endPoints } from "../../constants/urls/urls";
import "../../style/table.css";
import { Link, useNavigate } from "react-router-dom";
import { Toast, useToast } from "@chakra-ui/react";

const StudentData = () => {
	const [students, setStudents] = useState([]);
	const navigate = useNavigate();
	const hasShownToast = useRef(false);
	const toast = useToast()

	const authTokenAdmin = localStorage.getItem("authTokenAdmin");
	
		useEffect(() => {
			if (!authTokenAdmin && !hasShownToast.current) {
				toast({
					title: "Sign in required",
					description: "Admin must be signed in",
					status: "error",
					duration: 9000,
					isClosable: true,
				});
				hasShownToast.current = true;
				navigate("/auth/sign-in");
			}
		}, []);

	const fetchAllStudents = async () => {
		try {
			// Include the authToken in the request headers
			// const config = {
			// 	headers: {
			// 		Authorization: `Bearer ${authTokenStudent}`,
			// 		"Content-Type": "application/json",
			// 	},
			// };

			const response = await getApiService(
				endPoints.ALL_STUDENTS
				// config
			);
			console.log(response.data);
			setStudents(response.data.data);
		} catch (error) {
			// Log any errors that occur during the fetch
			console.log(error);
		}
	};

	useEffect(() => {
		fetchAllStudents();
	}, []);

	return (
		<>
			<div className="table-main-body">
				<div className="students-table-container">
					<h2>Student Data</h2>
					<table className="students-table">
						<thead>
							<tr>
								<th>Student ID</th>
								<th>First Name</th>
								<th>Middle Name</th>
								<th>Last Name</th>
								<th>Address</th>
								<th>Section</th>
								<th>Date of Birth</th>
								<th>Gender</th>
								<th>Status</th>
							</tr>
						</thead>
						<tbody>
							{students.map((student) => (
								<tr key={student.student_id}>
									<td>{student.student_id}</td>
									<td>{student.s_first_name}</td>
									<td>{student.s_middle_name}</td>
									<td>{student.s_last_name}</td>
									<td>{student.s_address}</td>
									<td>{student.section_id}</td>
									<td>{student.date_of_birth}</td>
									<td>{student.Gender}</td>
									<td>{student.Status}</td>
								</tr>
							))}
						</tbody>
					</table>
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
			</div>
		</>
	);
};

export default StudentData;
