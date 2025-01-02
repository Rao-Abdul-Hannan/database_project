import React, { useEffect, useState } from "react";
import getApiService from "../../services/getApiService";
import { endPoints } from "../../constants/urls/urls";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";

const MonthlyFeeData = () => {
	const [monthlyFee, setMonthlyFee] = useState([]);
	const navigate = useNavigate();
	const toast = useToast();

	const authTokenAdmin = localStorage.getItem("authTokenAdmin");
	useEffect(() => {
		if (!authTokenAdmin) {
			navigate("/auth/sign-in");
		}
	}, [authTokenAdmin]);

	const fetchMonthlyFee = async () => {
		try {
			const response = await getApiService(
				endPoints.MONTHLY_FEE
			);
			console.log(response.data);
			setMonthlyFee(response.data.data);
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
		fetchMonthlyFee();
	}, []);
	return (
		<>
			<div className="table-main-body">
				<div className="students-table-container">
					<h2>Monthly Fee</h2>
					<table className="students-table">
						<thead>
							<tr>
								<th>Fee ID</th>
								<th>Student ID</th>
								<th>Fee Amount</th>
								<th>Fee Status</th>
								<th>Fee Type</th>
								<th>Due Date</th>
								<th>Paid Date</th>
							</tr>
						</thead>
						<tbody>
							{monthlyFee.map((monthlyFee) => (
								<tr key={monthlyFee.fee_id}>
									<td>{monthlyFee.fee_id}</td>
									<td>{monthlyFee.student_id}</td>
									<td>{monthlyFee.fee_amount}</td>
									<td>{monthlyFee.fee_status}</td>
									<td>{monthlyFee.fee_type}</td>
									<td>
										{new Date(
											monthlyFee.due_date
										).toLocaleDateString()}
									</td>{" "}
									<td>
										{new Date(
											monthlyFee.paid_date
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

export default MonthlyFeeData;
