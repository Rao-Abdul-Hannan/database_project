import React, { useEffect, useState } from "react";
import { endPoints } from "../../constants/urls/urls";
import getApiService from "../../services/getApiService";
import { Link, useNavigate } from "react-router-dom";
import "../../style/table.css";
import { useToast } from "@chakra-ui/react";

const AttendanceData = () => {
	const [attendance, setAttendance] = useState([]);
	const navigate = useNavigate();
	const toast = useToast();

	const authTokenAdmin = localStorage.getItem("authTokenAdmin");
		useEffect(() => {
			if (!authTokenAdmin) {
				navigate("/auth/sign-in");
			}
		}, [authTokenAdmin]);

	const fetchAllAttendance = async () => {
		try {
			const response = await getApiService(
				endPoints.ATTENDANCE_DATA
			);
			console.log(response.data);
			setAttendance(response.data.data);
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
		fetchAllAttendance();
	}, []);
	return (
		<>
			<div className="table-main-body">
				<div className="students-table-container">
					<h2>Attendance Data</h2>
					<table className="students-table">
						<thead>
							<tr>
								<th>Attendance ID</th>
								<th>Student Id</th>
								<th>Attendance Status</th>
								<th>Period Id</th>
								<th>Date</th>
							</tr>
						</thead>
						<tbody>
							{attendance.map((attendance) => (
								<tr key={attendance.attendance_id}>
									<td>{attendance.attendance_id}</td>
									<td>{attendance.student_id}</td>
									<td>{attendance.attendance_status}</td>
									<td>{attendance.period_id}</td>
									<td>
										{new Date(
											attendance.date
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

export default AttendanceData;
