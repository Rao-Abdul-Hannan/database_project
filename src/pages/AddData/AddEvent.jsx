import React, { useEffect, useRef, useState } from "react";
import "../../style/adminForm.css";
import postApiService from "../../services/postApiService";
import { endPoints } from "../../constants/urls/urls";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import { AxiosError } from "axios";

const AddEvent = () => {
	const navigate = useNavigate();

	const toast = useToast();
	const hasShownToast = useRef(false);

	const authTokenAdmin = localStorage.getItem("authTokenAdmin");

	useEffect(() => {
		if (!authTokenAdmin && !hasShownToast.current) {
			toast({
				title: "Sign in required",
				description: "Admin must be signed in",
				status: "error",
				duration: 9000,
				isClosable: true,
			});
			hasShownToast.current = true;
			navigate("/auth/sign-in");
		}
	}, []);

	const [formData, setFormData] = useState({
		event_id: "",
		event_name: "",
		starting_date: "",
		ending_date: "",
		location: "",
	});

	const handleInput = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		console.log(formData);

		try {
			const response = await postApiService(
				endPoints.ADD_EVENT,
				formData
			);
			if (response.data.success) {
				toast({
					title: "Submitted",
					description: "Event Added",
					status: "success",
					duration: 9000,
					isClosable: true,
				});
			}
		} catch (error) {
			console.error(error.response);
			toast({
				title: "Error",
				description: error.response.data.message,
				status: "error",
				duration: 9000,
				isClosable: true,
			});
		}

		setFormData({
			event_id: "",
			event_name: "",
			starting_date: "",
			ending_date: "",
			location: "",
		});
	};
	return (
		<>
			<div className="new-student">
				<form
					action=""
					onSubmit={handleSubmit}
					className="login-form py-5"
				>
					{/* ID */}
					<div className="form-floating mb-3 mx-5">
						<input
							type="number"
							name="event_id"
							className="form-control"
							id="floatingInput eventt_id"
							placeholder="100"
							value={formData.event_id}
							onChange={handleInput}
						/>
						<label htmlFor="floatingInput">Event ID</label>
					</div>
					{/* First Name */}
					<div className="form-floating mb-3 mx-5">
						<input
							type="text"
							name="event_name"
							className="form-control"
							id="floatingInput event_name"
							placeholder="Name"
							value={formData.event_name}
							onChange={handleInput}
						/>
						<label htmlFor="floatingInput">Event Name</label>
					</div>
					{/* Date of Birth */}
					<div className="form-floating mb-3 mx-5">
						<input
							type="date"
							name="starting_date"
							className="form-control"
							id="floatingInput starting_date"
							value={formData.starting_date}
							onChange={handleInput}
						/>
						<label htmlFor="floatingInput">Starting Date</label>
					</div>
					<div className="form-floating mb-3 mx-5">
						<input
							type="date"
							name="ending_date"
							className="form-control"
							id="floatingInput ending_date"
							value={formData.ending_date}
							onChange={handleInput}
						/>
						<label htmlFor="floatingInput">Ending Date</label>
					</div>
					{/* Email */}
					<div className="form-floating mb-3 mx-5">
						<input
							type="text"
							name="location"
							className="form-control"
							id="floatingInput location"
							placeholder="Auditorium"
							value={formData.location}
							onChange={handleInput}
						/>
						<label htmlFor="floatingInput">Location</label>
					</div>
					<div className="signUp-button">
						<button
							type="submit"
							className="form-floating mb-3 mx-5 button-styling"
						>
							Add Event
						</button>
					</div>
				</form>
			</div>
		</>
	);
};

export default AddEvent;
