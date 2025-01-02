import React, { useEffect, useState } from "react";
import { endPoints } from "../../constants/urls/urls";
import getApiService from "../../services/getApiService";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";

const RoomData = () => {
	const [room, setRoom] = useState([]);
	const navigate = useNavigate();
	const toast = useToast();

	const authTokenAdmin = localStorage.getItem("authTokenAdmin");
	useEffect(() => {
		if (!authTokenAdmin) {
			navigate("/auth/sign-in");
		}
	}, [authTokenAdmin]);

	const fetchRoomData = async () => {
		try {
			const response = await getApiService(
				endPoints.ROOM_DATA
			);
			console.log(response.data);
			setRoom(response.data.data);
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
		fetchRoomData();
	}, []);
	return (
		<>
			<div className="table-main-body">
				<div className="students-table-container">
					<h2>Room Data</h2>
					<table className="students-table">
						<thead>
							<tr>
								<th>Room ID</th>
								<th>Room Type</th>
							</tr>
						</thead>
						<tbody>
							{room.map((room) => (
								<tr key={room.room_id}>
									<td>{room.room_id}</td>
									<td>{room.room_type}</td>
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

export default RoomData;
