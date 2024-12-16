import React, { useEffect, useState } from "react";
import getApiService from "../../services/getApiService";
import { endPoints } from "../../constants/urls/urls";
import { Link } from "react-router-dom";

const PeriodData = () => {
	const [period, setPeriod] = useState([]);

	// const authTokenAdmin = localStorage.getItem("authTokenAdmin");
	// useEffect(() => {F
	// 	if (!authTokenAdmin) {
	// 		navigate("/auth/admin-login");
	// 	}
	// }, [authTokenAdmin]);

	const fetchPeriodData = async () => {
		try {
			// Include the authToken in the request headers
			// const config = {
			// 	headers: {
			// 		Authorization: `Bearer ${authTokenAdmin}`,
			// 		"Content-Type": "application/json",
			// 	},
			// };

			const response = await getApiService(
				endPoints.PERIOD_DATA
				// config
			);
			console.log(response.data);
			setPeriod(response.data.data);
		} catch (error) {
			// Log any errors that occur during the fetch
			console.log(error);
		}
	};

	useEffect(() => {
		fetchPeriodData();
	}, []);
	return (
		<>
			<div className="table-main-body">
				<div className="students-table-container">
					<h2>Period Data</h2>
					<table className="students-table">
						<thead>
							<tr>
								<th>Period ID</th>
								<th>Subject Id</th>
								<th>Section Id</th>
								<th>Starting Time</th>
								<th>Ending Time</th>
								<th>Day & Date</th>
							</tr>
						</thead>
						<tbody>
							{period.map((period) => (
								<tr key={period.period_id}>
									<td>{period.period_id}</td>
									<td>{period.subject_id}</td>
									<td>{period.section_id}</td>
									<td>{period.starting_time}</td>{" "}
									<td>{period.ending_time}</td>{" "}
									<td>
										{new Date(
											period.Day_date
										).toLocaleDateString()}{" "}
									</td>
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

export default PeriodData;
