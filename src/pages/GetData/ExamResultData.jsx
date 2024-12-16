import React, { useEffect, useState } from 'react'
import getApiService from '../../services/getApiService';
import { endPoints } from '../../constants/urls/urls';
import { Link } from 'react-router-dom';

const ExamResultData = () => {
  const [examResult, setExamResult] = useState([]);

  // const authTokenAdmin = localStorage.getItem("authTokenAdmin");
  // useEffect(() => {F
  // 	if (!authTokenAdmin) {
  // 		navigate("/auth/admin-login");
  // 	}
  // }, [authTokenAdmin]);

  const fetchAllExamResult = async () => {
		try {
			// Include the authToken in the request headers
			// const config = {
			// 	headers: {
			// 		Authorization: `Bearer ${authTokenAdmin}`,
			// 		"Content-Type": "application/json",
			// 	},
			// };

			const response = await getApiService(
				endPoints.EXAM_RESULT
				// config
			);
			console.log(response.data);
			setExamResult(response.data.data);
		} catch (error) {
			// Log any errors that occur during the fetch
			console.log(error);
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
}

export default ExamResultData