import React, { useEffect, useState } from "react";
import getApiService from "../../services/getApiService";
import { endPoints } from "../../constants/urls/urls";
import { Link, useNavigate } from "react-router-dom";
import "../../style/table.css";
import { useToast } from "@chakra-ui/react";

const AdmissionData = () => {
	const [admission, setAdmission] = useState([]);
	const navigate = useNavigate();
	const toast = useToast();

	const authTokenAdmin = localStorage.getItem("authTokenAdmin");
	useEffect(() => {
		if (!authTokenAdmin) {
			navigate("/auth/sign-in");
		}
	}, [authTokenAdmin]);

	const fetchAllAdmissions = async () => {
		try {
			const response = await getApiService(
				endPoints.ADMISSION_DATA
			);
			console.log(response.data);
			setAdmission(response.data.data);
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
