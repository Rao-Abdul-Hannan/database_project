import React, { useEffect, useState } from "react";
import getApiService from "../../services/getApiService";
import { endPoints } from "../../constants/urls/urls";
import { useNavigate, useParams } from "react-router-dom";
import "../../style/table.css";

const TeacherTeachingSections = () => {
	const navigate = useNavigate();

	const authTokenAdmin = localStorage.getItem("authTokenAdmin");
	useEffect(() => {
		if (!authTokenAdmin) {
			navigate("/auth/sign-in");
		}
	}, [authTokenAdmin]);

	const [teachingSections, setTeachingSections] = useState([]);
	const [teacherName, setTeacherName] = useState("");

	const teacherId = useParams();
	const id = teacherId.id;

	const fetchTeachingSections = async () => {
		try {
			// Include the authToken in the request headers
			// const config = {
			// 	headers: {
			// 		Authorization: `Bearer ${authTokenAdmin}`,
			// 		"Content-Type": "application/json",
			// 	},
			// };

			const response = await getApiService(
				`${endPoints.TEACHER_SECTIONS}/${id}`
				// config
			);
			if (response.data.success) {
				setTeachingSections(response.data.data);
				if (teachingSections.length > 0) {
					setTeacherName(
						teachingSections[0].teacher_first_name +
							" " +
							teachingSections[0].teacher_last_name
					);
				}
			}
		} catch (error) {
			// Log any errors that occur during the fetch
			console.log(error);
		}
	};

	useEffect(() => {
		fetchTeachingSections();
	}, []);
	return (
		<>
			<div className="table-main-body">
				<div className="students-table-container">
					<div>{<h2>{teacherName}'s Sections</h2>}</div>

					{teachingSections.length > 0 ? (
						<table className="students-table">
							<thead>
								<tr>
									<th>Class Name</th>
									<th>Section Name</th>
									<th>Course Name</th>
								</tr>
							</thead>
							<tbody>
								{teachingSections.map((section, index) => (
									<tr key={index}>
										<td>{section.class_name}</td>
										<td>{section.section_name}</td>
										<td>{section.course_name}</td>
									</tr>
								))}
							</tbody>
						</table>
					) : (
						<p>No sections found for this teacher.</p>
					)}
				</div>
			</div>
		</>
	);
};

export default TeacherTeachingSections;
