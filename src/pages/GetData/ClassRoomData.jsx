import React, { useEffect, useState } from "react";
import { endPoints } from "../../constants/urls/urls";
import getApiService from "../../services/getApiService";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";

const ClassRoomData = () => {
	const [classRooms, setClassRooms] = useState([]);
	const navigate = useNavigate();
	const toast = useToast();

	const authTokenAdmin = localStorage.getItem("authTokenAdmin");
		useEffect(() => {
			if (!authTokenAdmin) {
				navigate("/auth/sign-in");
			}
		}, [authTokenAdmin]);

	const fetchClassRoomData = async () => {
		try {
			const response = await getApiService(
				endPoints.CLASSROOM_DATA
			);
			console.log(response.data);
			setClassRooms(response.data.data);
		} catch (error) {
			toast({
				title: "Error",
				description: error.response.data.message,
				status: "error",
				duration: 9000,
				isClosable: true,
			});console.log(error);
		}
	};

	useEffect(() => {
		fetchClassRoomData();
	}, []);
	return (
		<>
			<div className="table-main-body">
				<div className="students-table-container">
					<h2>ClassRoom Data</h2>
					<table className="students-table">
						<thead>
							<tr>
								<th>Class Room ID</th>
								<th>Class Name</th>
								<th>Class Start Date</th>
								<th>Class End Date</th>
							</tr>
						</thead>
						<tbody>
							{classRooms.map((classRooms) => (
								<tr key={classRooms.classroom_id}>
									<td>{classRooms.classroom_id}</td>
									<td>{classRooms.class_name}</td>
									<td>
										{new Date(
											classRooms.class_start_date
										).toLocaleDateString()}
									</td>{" "}
									<td>
										{new Date(
											classRooms.class_end_date
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

export default ClassRoomData;
