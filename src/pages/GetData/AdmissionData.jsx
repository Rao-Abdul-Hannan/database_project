import React, { useEffect, useState } from "react";
import getApiService from "../../services/getApiService";
import { endPoints } from "../../constants/urls/urls";
import { Link } from "react-router-dom";
import "../../style/table.css";

const AdmissionData = () => {
	const [admission, setAdmission] = useState([]);

	// const authTokenAdmin = localStorage.getItem("authTokenAdmin");
	// useEffect(() => {F
	// 	if (!authTokenAdmin) {
	// 		navigate("/auth/admin-login");
	// 	}
	// }, [authTokenAdmin]);

	const fetchAllAdmissions = async () => {
		try {
			// Include the authToken in the request headers
			// const config = {
			// 	headers: {
			// 		Authorization: `Bearer ${authTokenAdmin}`,
			// 		"Content-Type": "application/json",
			// 	},
			// };

			const response = await getApiService(
				endPoints.ADMISSION_DATA
				// config
			);
			console.log(response.data);
			setAdmission(response.data.data);
		} catch (error) {
			// Log any errors that occur during the fetch
			console.log(error);
		}
	};

	useEffect(() => {
		fetchAllAdmissions();
	}, []);
	return (
		<>
			<div className="table-main-body">
				<div className="students-table-container">
					<h2>Admission Data</h2>
					<table className="students-table">
						<thead>
							<tr>
								<th>Admission ID</th>
								<th>Student Id</th>
								<th>Admission Date</th>
								<th>Admission Fee</th>
							</tr>
						</thead>
						<tbody>
							{admission.map((admission) => (
								<tr key={admission.admission_id}>
									<td>{admission.admission_id}</td>
									<td>{admission.student_id}</td>
									<td>
										{new Date(
											admission.admission_date
										).toLocaleDateString()}
									</td>{" "}
									<td>{admission.admission_fee}</td>
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

export default AdmissionData;
