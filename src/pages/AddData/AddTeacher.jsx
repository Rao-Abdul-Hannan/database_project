import React, { useEffect, useRef, useState } from "react";
import "../../style/adminForm.css";
import postApiService from "../../services/postApiService";
import { endPoints } from "../../constants/urls/urls";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";

const AddTeacher = () => {
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
		t_id: "",
		FirstName: "",
		LastName: "",
		DateOfBirth: "",
		Gender: "",
		Email: "",
		PhoneNumber: "",
		Address: "",
		Salary: "",
		Status: "",
		DateOfJoining: "",
	});

	const handleInput = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

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
			t_id: "",
			FirstName: "",
			LastName: "",
			DateOfBirth: "",
			Gender: "",
			Email: "",
			PhoneNumber: "",
			Address: "",
			Salary: "",
			Status: "",
			DateOfJoining: "",
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
							name="t_id"
							className="form-control"
							id="floatingInput t_id"
							placeholder="100"
							value={formData.t_id}
							onChange={handleInput}
						/>
						<label htmlFor="floatingInput">Teacher ID</label>
					</div>
					{/* First Name */}
					<div className="form-floating mb-3 mx-5">
						<input
							type="text"
							name="FirstName"
							className="form-control"
							id="floatingInput FirstName"
							placeholder="First Name"
							value={formData.FirstName}
							onChange={handleInput}
						/>
						<label htmlFor="floatingInput">First Name</label>
					</div>
					{/* Last Name */}
					<div className="form-floating mb-3 mx-5">
						<input
							type="text"
							name="LastName"
							className="form-control"
							id="floatingInput LastName"
							placeholder="Last Name"
							value={formData.LastName}
							onChange={handleInput}
						/>
						<label htmlFor="floatingInput">Last Name</label>
					</div>
					{/* Date of Birth */}
					<div className="form-floating mb-3 mx-5">
						<input
							type="date"
							name="DateOfBirth"
							className="form-control"
							id="floatingInput DateOfBirth"
							value={formData.DateOfBirth}
							onChange={handleInput}
						/>
						<label htmlFor="floatingInput">Date of Birth</label>
					</div>
					{/* Gender */}
					<div className="form-floating mb-3 mx-5">
						<select
							name="Gender"
							className="form-control"
							id="floatingInput Gender"
							value={formData.Gender}
							onChange={handleInput}
						>
							<option value="">Select Gender</option>
							<option value="Male">Male</option>
							<option value="Female">Female</option>
							<option value="Other">Other</option>
						</select>
						<label htmlFor="floatingInput">Gender</label>
					</div>
					{/* Email */}
					<div className="form-floating mb-3 mx-5">
						<input
							type="email"
							name="Email"
							className="form-control"
							id="floatingInput Email"
							placeholder="name@example.com"
							value={formData.Email}
							onChange={handleInput}
						/>
						<label htmlFor="floatingInput">Email Address</label>
					</div>
					{/* Phone Number */}
					<div className="form-floating mb-3 mx-5">
						<input
							type="text"
							name="PhoneNumber"
							className="form-control"
							id="floatingInput PhoneNumber"
							placeholder="+923001234567"
							value={formData.PhoneNumber}
							onChange={handleInput}
						/>
						<label htmlFor="floatingInput">Phone Number</label>
					</div>
					{/* Address */}
					<div className="form-floating mb-3 mx-5">
						<input
							type="text"
							name="Address"
							className="form-control"
							id="floatingInput Address"
							placeholder="123 Main Street"
							value={formData.Address}
							onChange={handleInput}
						/>
						<label htmlFor="floatingInput">Address</label>
					</div>
					{/* Salary */}
					<div className="form-floating mb-3 mx-5">
						<input
							type="number"
							name="Salary"
							className="form-control"
							id="floatingInput Salary"
							placeholder="75000"
							value={formData.Salary}
							onChange={handleInput}
						/>
						<label htmlFor="floatingInput">Salary</label>
					</div>
					{/* Status */}
					<div className="form-floating mb-3 mx-5">
						<select
							name="Status"
							className="form-control"
							id="floatingInput Status"
							value={formData.Status}
							onChange={handleInput}
						>
							<option value="">Select Status</option>
							<option value="Active">Active</option>
							<option value="OnLeave">On-Leave</option>
							<option value="Inactive">Retired</option>
						</select>
						<label htmlFor="floatingInput">Status</label>
					</div>
					{/* Date of Joining */}
					<div className="form-floating mb-3 mx-5">
						<input
							type="date"
							name="DateOfJoining"
							className="form-control"
							id="floatingInput DateOfJoining"
							value={formData.DateOfJoining}
							onChange={handleInput}
						/>
						<label htmlFor="floatingInput">Date of Joining</label>
					</div>
					<div className="signUp-button">
						<button
							type="submit"
							className="form-floating mb-3 mx-5 button-styling"
						>
							Add Teacher
						</button>
					</div>
				</form>
			</div>
		</>
	);
};

export default AddTeacher;
