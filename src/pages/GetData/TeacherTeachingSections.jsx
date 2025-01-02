import React, { useEffect, useState } from "react";
import getApiService from "../../services/getApiService";
import { endPoints } from "../../constants/urls/urls";
import { useNavigate, useParams } from "react-router-dom";
import "../../style/table.css";
import { useToast } from "@chakra-ui/react";

const TeacherTeachingSections = () => {
	const navigate = useNavigate();
	const toast = useToast();

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
				toast({
					title: "Teacher Sections",
					description: response.data.message,
					status: "success",
					duration: 9000,
					isClosable: true,
				});
				const teacherData = response.data.data;
				setTeachingSections(teacherData);
				if (teacherData.length > 0) {
					setTeacherName(
						teacherData[0].teacher_first_name +
							" " +
							teacherData[0].teacher_last_name
					);
				}
			}
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
