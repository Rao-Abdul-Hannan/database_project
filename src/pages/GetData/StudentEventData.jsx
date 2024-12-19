import React, { useEffect, useState } from "react";
import getApiService from "../../services/getApiService";
import { endPoints } from "../../constants/urls/urls";
import { Link, useNavigate } from "react-router-dom";

const StudentEventData = () => {
	const [studentEvent, setStudentEvent] = useState([]);
	const navigate = useNavigate();

	const authTokenAdmin = localStorage.getItem("authTokenAdmin");
	useEffect(() => {
		if (!authTokenAdmin) {
			navigate("/auth/sign-in");
		}
	}, [authTokenAdmin]);

	const fetchStudentEvents = async () => {
		try {
			// Include the authToken in the request headers
			// const config = {
			// 	headers: {
			// 		Authorization: `Bearer ${authTokenAdmin}`,
			// 		"Content-Type": "application/json",
			// 	},
			// };

			const response = await getApiService(
				endPoints.STUDENT_EVENT_DATA
				// config
			);
			console.log(response.data);
			setStudentEvent(response.data.data);
		} catch (error) {
			// Log any errors that occur during the fetch
			console.log(error);
		}
	};

	useEffect(() => {
		fetchStudentEvents();
	}, []);
	return (
		<>
			<div className="table-main-body">
				<div className="students-table-container">
					<h2>Faculty Data</h2>
					<table className="students-table">
						<thead>
							<tr>
								<th>Student's Event ID</th>
								<th>Student ID</th>
								<th>Event ID</th>
								<th>Registered Date</th>
							</tr>
						</thead>
						<tbody>
							{studentEvent.map((studentEvent) => (
								<tr key={studentEvent.student_event_id}>
									<td>{studentEvent.student_event_id}</td>
									<td>{studentEvent.student_id}</td>
									<td>{studentEvent.event_id}</td>
									<td>
										{new Date(
											studentEvent.registered_date
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

export default StudentEventData;
