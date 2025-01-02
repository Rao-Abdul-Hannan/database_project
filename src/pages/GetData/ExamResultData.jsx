import React, { useEffect, useState } from "react";
import getApiService from "../../services/getApiService";
import { endPoints } from "../../constants/urls/urls";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";

const ExamResultData = () => {
	const [examResult, setExamResult] = useState([]);
	const navigate = useNavigate();
	const toast = useToast();

	const authTokenAdmin = localStorage.getItem("authTokenAdmin");
	useEffect(() => {
		if (!authTokenAdmin) {
			navigate("/auth/sign-in");
		}
	}, [authTokenAdmin]);

	const fetchAllExamResult = async () => {
		try {
			const response = await getApiService(
				endPoints.EXAM_RESULT
			);
			console.log(response.data);
			setExamResult(response.data.data);
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
		fetchAllExamResult();
	}, []);
	return (
		<>
			<div className="table-main-body">
				<div className="students-table-container">
					<h2>Exam Result</h2>
					<table className="students-table">
						<thead>
							<tr>
								<th>Exam ID</th>
								<th>Student ID</th>
								<th>Marks Obtained</th>
							</tr>
						</thead>
						<tbody>
							{examResult.map((examResult) => (
								<tr key={examResult.exam_id}>
									<td>{examResult.student_id}</td>
									<td>{examResult.exam_id}</td>
									<td>{examResult.marks_obtained}</td>
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

export default ExamResultData;
