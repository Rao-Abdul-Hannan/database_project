import React, { useEffect, useState } from "react";
import getApiService from "../../services/getApiService";
import { endPoints } from "../../constants/urls/urls";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";

const PeriodData = () => {
	const [period, setPeriod] = useState([]);
	const navigate = useNavigate();
	const toast = useToast();

	const authTokenAdmin = localStorage.getItem("authTokenAdmin");
		useEffect(() => {
			if (!authTokenAdmin) {
				navigate("/auth/sign-in");
			}
		}, [authTokenAdmin]);

	const fetchPeriodData = async () => {
		try {
			const response = await getApiService(
				endPoints.PERIOD_DATA
			);
			console.log(response.data);
			setPeriod(response.data.data);
		} catch (error) {
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
