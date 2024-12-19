import React, { useEffect, useState } from "react";
import "../../style/table.css";
import { endPoints } from "../../constants/urls/urls";
import getApiService from "../../services/getApiService";
import { Link, useNavigate } from "react-router-dom";

const FacultyData = () => {
	const [teachers, setTeachers] = useState([]);
	const navigate = useNavigate();

	const authTokenAdmin = localStorage.getItem("authTokenAdmin");
		useEffect(() => {
			if (!authTokenAdmin) {
				navigate("/auth/sign-in");
			}
		}, [authTokenAdmin]);

	const fetchAllTeachers = async () => {
		try {
			// Include the authToken in the request headers
			// const config = {
			// 	headers: {
			// 		Authorization: `Bearer ${authTokenAdmin}`,
			// 		"Content-Type": "application/json",
			// 	},
			// };

			const response = await getApiService(
				endPoints.ALL_TEACHERS
				// config
			);
			console.log(response.data);
			setTeachers(response.data.data);
		} catch (error) {
			// Log any errors that occur during the fetch
			console.log(error);
		}
	};

	useEffect(() => {
		fetchAllTeachers();
	}, []);
	return (
		<>
			<div className="table-main-body">
				<div className="students-table-container">
					<h2>Faculty Data</h2>
					<table className="students-table">
						<thead>
							<tr>
								<th>Teacher ID</th>
								<th>First Name</th>
								<th>Last Name</th>
								<th>Date of Birth</th>
								<th>Gender</th>
								<th>Email</th>
								<th>Phone Number</th>
								<th>Address</th>
								<th>Salary</th>
								<th>Status</th>
								<th>Date of Joining</th>
							</tr>
						</thead>
						<tbody>
							{teachers.map((teacher) => (
								<tr key={teacher.t_id}>
									<td>{teacher.t_id}</td>
									<td>{teacher.FirstName}</td>
									<td>{teacher.LastName}</td>
									<td>
										{new Date(
											teacher.DateOfBirth
										).toLocaleDateString()}
									</td>{" "}
									{/* Format the Date of Birth */}
									<td>{teacher.Gender}</td>
									<td>{teacher.Email}</td>
									<td>{teacher.PhoneNumber}</td>
									<td>{teacher.Address}</td>
									<td>{teacher.Salary}</td>
									<td>{teacher.Status}</td>
									<td>
										{new Date(
											teacher.DateOfJoining
										).toLocaleDateString()}
									</td>{" "}
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

export default FacultyData;
