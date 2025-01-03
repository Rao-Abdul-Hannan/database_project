import React, { useEffect, useState } from "react";
import getApiService from "../../services/getApiService";
import { endPoints } from "../../constants/urls/urls";
import { Link, useNavigate } from "react-router-dom";
import "../../style/table.css";
import { useToast } from "@chakra-ui/react";

const EventsData = () => {
	const [events, setEvents] = useState([]);
	const navigate = useNavigate();
	const toast = useToast();

	const authTokenAdmin = localStorage.getItem("authTokenAdmin");
		useEffect(() => {
			if (!authTokenAdmin) {
				navigate("/auth/sign-in");
			}
		}, [authTokenAdmin]);

	const fetchAllEvents = async () => {
		try {
			const response = await getApiService(
				endPoints.EVENTS_DATA
			);
			console.log(response.data);
			setEvents(response.data.data);
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
		fetchAllEvents();
	}, []);
	return (
		<>
			<div className="table-main-body">
				<div className="students-table-container">
					<h2>Events Data</h2>
					<table className="students-table">
						<thead>
							<tr>
								<th>Event ID</th>
								<th>Event Name</th>
								<th>Starting Date</th>
								<th>Ending Date</th>
								<th>Location</th>
							</tr>
						</thead>
						<tbody>
							{events.map((event) => (
								<tr key={event.event_id}>
									<td>{event.event_id}</td>
									<td>{event.event_name}</td>
									<td>
										{new Date(
											event.starting_date
										).toLocaleDateString()}
									</td>{" "}
									<td>
										{new Date(
											event.ending_date
										).toLocaleDateString()}
									</td>{" "}
									<td>{event.location}</td>
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

export default EventsData;
