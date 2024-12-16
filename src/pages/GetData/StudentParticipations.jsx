import React, { useEffect, useState } from 'react'
import { endPoints } from '../../constants/urls/urls';
import getApiService from '../../services/getApiService';
import { Link } from 'react-router-dom';

const StudentParticipations = () => {
  const [participations, setParticipations] = useState([]);

  // const authTokenAdmin = localStorage.getItem("authTokenAdmin");
  // useEffect(() => {F
  // 	if (!authTokenAdmin) {
  // 		navigate("/auth/admin-login");
  // 	}
  // }, [authTokenAdmin]);

  const fetchAllParticipations = async () => {
		try {
			// Include the authToken in the request headers
			// const config = {
			// 	headers: {
			// 		Authorization: `Bearer ${authTokenAdmin}`,
			// 		"Content-Type": "application/json",
			// 	},
			// };

			const response = await getApiService(
				endPoints.STUDENT_PARTICIPATION
				// config
			);
			console.log(response.data);
			setParticipations(response.data.data);
		} catch (error) {
			// Log any errors that occur during the fetch
			console.log(error);
		}
  };

  useEffect(() => {
		fetchAllParticipations();
  }, []);
  return (
		<>
			<div className="table-main-body">
				<div className="students-table-container">
					<h2>Student Participations</h2>
					<table className="students-table">
						<thead>
							<tr>
								<th>Student Name</th>
								<th>Address</th>
								<th>Section</th>
								<th>Gender</th>
							</tr>
						</thead>
						<tbody>
							{participations.map((participations) => (
								<tr key={participations.student_name}>
									<td>{participations.student_name}</td>
									<td>{participations.address}</td>
									<td>{participations.section}</td>
									<td>{participations.gender}</td>
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

export default StudentParticipations