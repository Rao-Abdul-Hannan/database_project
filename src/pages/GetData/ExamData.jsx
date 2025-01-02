import React, { useEffect, useState } from "react";
import getApiService from "../../services/getApiService";
import { endPoints } from "../../constants/urls/urls";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";

const ExamData = () => {
	const [exam, setExam] = useState([]);
	const navigate = useNavigate();
	const toast = useToast();

	const authTokenAdmin = localStorage.getItem("authTokenAdmin");
	useEffect(() => {
		if (!authTokenAdmin) {
			navigate("/auth/sign-in");
		}
	}, [authTokenAdmin]);

	const fetchAllExam = async () => {
		try {
			const response = await getApiService(
				endPoints.EXAM_DATA
			);
			console.log(response.data);
			setExam(response.data.data);
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
		fetchAllExam();
	}, []);
	return (
		<>
			<div className="table-main-body">
				<div className="students-table-container">
					<h2>Exam Data</h2>
					<table className="students-table">
						<thead>
							<tr>
								<th>Exam ID</th>
								<th>Subject ID</th>
								<th>Section ID</th>
								<th>Exam Date</th>
							</tr>
						</thead>
						<tbody>
							{exam.map((exam) => (
								<tr key={exam.exam_id}>
									<td>{exam.exam_id}</td>
									<td>{exam.subject_id}</td>
									<td>{exam.section_id}</td>
									<td>
										{new Date(
											exam.date
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

export default ExamData;
