import React, { useEffect, useState } from 'react'
import getApiService from '../../services/getApiService';
import { endPoints } from '../../constants/urls/urls';
import { Link } from 'react-router-dom';

const ExamData = () => {
  const [exam, setExam] = useState([]);

  // const authTokenAdmin = localStorage.getItem("authTokenAdmin");
  // useEffect(() => {F
  // 	if (!authTokenAdmin) {
  // 		navigate("/auth/admin-login");
  // 	}
  // }, [authTokenAdmin]);

  const fetchAllExam = async () => {
		try {
			// Include the authToken in the request headers
			// const config = {
			// 	headers: {
			// 		Authorization: `Bearer ${authTokenAdmin}`,
			// 		"Content-Type": "application/json",
			// 	},
			// };

			const response = await getApiService(
				endPoints.EXAM_DATA
				// config
			);
			console.log(response.data);
			setExam(response.data.data);
		} catch (error) {
			// Log any errors that occur during the fetch
			console.log(error);
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
}

export default ExamData