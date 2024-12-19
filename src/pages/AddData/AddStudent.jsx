import React, { useEffect, useRef, useState } from "react";
import "../../style/adminForm.css";
import { endPoints } from "../../constants/urls/urls";
import postApiService from "../../services/postApiService";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";

const AddStudent = () => {
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
		student_id: "",
		s_first_name: "",
		s_middle_name: "",
		s_last_name: "",
		s_address: "",
		section_id: "",
		date_of_birth: "",
		Gender: "",
		Status: "",
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
			student_id: "",
			s_first_name: "",
			s_middle_name: "",
			s_last_name: "",
			s_address: "",
			section_id: "",
			date_of_birth: "",
			Gender: "",
			Status: "",
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
					{/* Student ID */}
					<div className="form-floating mb-3 mx-5">
						<input
							type="number"
							name="student_id"
							className="form-control"
							id="floatingInput student_id"
							placeholder="0"
							value={formData.student_id}
							onChange={handleInput}
						/>
						<label htmlFor="floatingInput">Student ID</label>
					</div>
					{/* First Name */}
					<div className="form-floating mb-3 mx-5">
						<input
							type="text"
							name="s_first_name"
							className="form-control"
							id="floatingInput s_first_name"
							placeholder="FIrst Name"
							value={formData.s_first_name}
							onChange={handleInput}
						/>
						<label htmlFor="floatingInput">First Name</label>
					</div>
					{/* Middle Name */}
					<div className="form-floating mb-3 mx-5">
						<input
							type="text"
							name="s_middle_name"
							className="form-control"
							id="floatingInput s_middle_name"
							placeholder="Middle Name"
							value={formData.s_middle_name}
							onChange={handleInput}
						/>
						<label htmlFor="floatingInput">Middle Name</label>
					</div>
					{/* Last Name */}
					<div className="form-floating mb-3 mx-5">
						<input
							type="text"
							name="s_last_name"
							className="form-control"
							id="floatingInput s_last_name"
							placeholder="Last Name"
							value={formData.s_last_name}
							onChange={handleInput}
						/>
						<label htmlFor="floatingInput">Last Name</label>
					</div>
					{/* Address */}
					<div className="form-floating mb-3 mx-5">
						<input
							type="text"
							name="s_address"
							className="form-control"
							id="floatingInput s_address"
							placeholder="House No. 45, Gulberg, Lahore"
							value={formData.s_address}
							onChange={handleInput}
						/>
						<label htmlFor="floatingInput">Address</label>
					</div>
					{/* Section ID */}
					<div className="form-floating mb-3 mx-5">
						<input
							type="number"
							name="section_id"
							className="form-control"
							id="floatingInput section_id"
							placeholder="2"
							value={formData.section_id}
							onChange={handleInput}
						/>
						<label htmlFor="floatingInput">Section ID</label>
					</div>
					{/* Date of Birth */}
					<div className="form-floating mb-3 mx-5">
						<input
							type="date"
							name="date_of_birth"
							className="form-control"
							id="floatingInput date_of_birth"
							value={formData.date_of_birth}
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
							<option value="Graduate">Graduate</option>
							<option value="Enroll">Enroll</option>
						</select>
						<label htmlFor="floatingInput">Status</label>
					</div>
					{/* Submit Button */}
					<div className="signUp-button">
						<button
							type="submit"
							className="form-floating mb-3 mx-5 button-styling"
						>
							Add Student
						</button>
					</div>
				</form>
			</div>
		</>
	);
};

export default AddStudent;
