import React, { useEffect, useState } from "react";
import { endPoints } from "../../constants/urls/urls";
import getApiService from "../../services/getApiService";
import { Link, useNavigate } from "react-router-dom";

const SectionData = () => {
	const [section, setSection] = useState([]);
	const navigate = useNavigate();

	const authTokenAdmin = localStorage.getItem("authTokenAdmin");
	useEffect(() => {
		if (!authTokenAdmin) {
			navigate("/auth/sign-in");
		}
	}, [authTokenAdmin]);

	const fetchSections = async () => {
		try {
			// Include the authToken in the request headers
			// const config = {
			// 	headers: {
			// 		Authorization: `Bearer ${authTokenAdmin}`,
			// 		"Content-Type": "application/json",
			// 	},
			// };

			const response = await getApiService(
				endPoints.SECTION_DATA
				// config
			);
			console.log(response.data);
			setSection(response.data.data);
		} catch (error) {
			// Log any errors that occur during the fetch
			console.log(error);
		}
	};

	useEffect(() => {
		fetchSections();
	}, []);
	return (
		<>
			<div className="table-main-body">
				<div className="students-table-container">
					<h2>Faculty Data</h2>
					<table className="students-table">
						<thead>
							<tr>
								<th>Section ID</th>
								<th>Class ID</th>
								<th>Room ID</th>
								<th>Section Name</th>
							</tr>
						</thead>
						<tbody>
							{section.map((section) => (
								<tr key={section.section_id}>
									<td>{section.section_id}</td>
									<td>{section.class_id}</td>
									<td>{section.room_id}</td>
									<td>{section.section_name}</td>
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

export default SectionData;
