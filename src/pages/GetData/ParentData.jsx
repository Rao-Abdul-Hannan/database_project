import React, { useEffect, useState } from "react";
import getApiService from "../../services/getApiService";
import { endPoints } from "../../constants/urls/urls";
import { Link } from "react-router-dom";

const ParentData = () => {
	const [parent, setParent] = useState([]);

	// const authTokenAdmin = localStorage.getItem("authTokenAdmin");
	// useEffect(() => {F
	// 	if (!authTokenAdmin) {
	// 		navigate("/auth/admin-login");
	// 	}
	// }, [authTokenAdmin]);

	const fetchAllParents = async () => {
		try {
			// Include the authToken in the request headers
			// const config = {
			// 	headers: {
			// 		Authorization: `Bearer ${authTokenAdmin}`,
			// 		"Content-Type": "application/json",
			// 	},
			// };

			const response = await getApiService(
				endPoints.PARENT_DATA
				// config
			);
			console.log(response.data);
			setParent(response.data.data);
		} catch (error) {
			// Log any errors that occur during the fetch
			console.log(error);
		}
	};

	useEffect(() => {
		fetchAllParents();
	}, []);
	return (
		<>
			<div className="table-main-body">
				<div className="students-table-container">
					<h2>Parents Data</h2>
					<table className="students-table">
						<thead>
							<tr>
								<th>Parent ID</th>
								<th>Student_id</th>
								<th>Name</th>
								<th>Occupation</th>
								<th>Email</th>
								<th>Phone#</th>
							</tr>
						</thead>
						<tbody>
							{parent.map((parent) => (
								<tr key={parent.t_id}>
									<td>{parent.id}</td>
									<td>{parent.student_id}</td>
									<td>{parent.name}</td>
									<td>{parent.occupation}</td>
									<td>{parent.email}</td>
									<td>{parent.phone_no}</td>
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

export default ParentData;
