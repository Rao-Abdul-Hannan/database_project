import React from 'react'
import { useEffect, useState } from "react";
import { endPoints } from "../../constants/urls/urls";
import getApiService from "../../services/getApiService";
import { Link } from "react-router-dom";
const SubjectData = () => {
  const [subject, setSubject] = useState([]);

  // const authTokenAdmin = localStorage.getItem("authTokenAdmin");
  // useEffect(() => {F
  // 	if (!authTokenAdmin) {
  // 		navigate("/auth/admin-login");
  // 	}
  // }, [authTokenAdmin]);

  const fetchSubjects = async () => {
		try {
			// Include the authToken in the request headers
			// const config = {
			// 	headers: {
			// 		Authorization: `Bearer ${authTokenAdmin}`,
			// 		"Content-Type": "application/json",
			// 	},
			// };

			const response = await getApiService(
				endPoints.SUBJECT_COURSE_DATA
				// config
			);
			console.log(response.data);
			setSubject(response.data.data);
		} catch (error) {
			// Log any errors that occur during the fetch
			console.log(error);
		}
  };

  useEffect(() => {
		fetchSubjects();
  }, []);
  return (
		<>
			<div className="table-main-body">
				<div className="students-table-container">
					<h2>Faculty Data</h2>
					<table className="students-table">
						<thead>
							<tr>
								<th>Course ID</th>
								<th>Course Name</th>
							</tr>
						</thead>
						<tbody>
							{subject.map((subject) => (
								<tr key={subject.course_id}>
									<td>{subject.course_id}</td>
									<td>{subject.course_name}</td>
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

export default SubjectData
