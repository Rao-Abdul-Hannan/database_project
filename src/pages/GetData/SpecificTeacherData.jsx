import React, { useEffect, useState } from "react";
import getApiService from "../../services/getApiService";
import { endPoints } from "../../constants/urls/urls";
import { Link, useParams } from "react-router-dom";
import "../../style/form.css";
import teacherImg from "../../assets/Images/th.jpeg";

const SpecificTeacherData = () => {
	const [teacher, setTeacher] = useState({});
	// const teacherId = location.state?.id;
	const teacherId = useParams();
	const id = teacherId.id;

	const fetchTeacher = async () => {
		try {
			// Include the authToken in the request headers
			// const config = {
			// 	headers: {
			// 		Authorization: `Bearer ${authTokenAdmin}`,
			// 		"Content-Type": "application/json",
			// 	},
			// };

			const response = await getApiService(
				`${endPoints.SPECIFIC_TEACHER}/${id}`
				// config
			);
			console.log(response.data.data);
			setTeacher(response.data.data);
		} catch (error) {
			// Log any errors that occur during the fetch
			console.log(error);
		}
	};

	useEffect(() => {
		fetchTeacher();
	}, []);

	return (
		<>
			<div className="image-form">
				<div className="form-style-container">
					<h2 className="py-3">Faculty Information</h2>
					<form className="faculty-form">
						<div className="form-row">
							<label>Teacher ID:</label>
							<span>{teacher.t_id}</span>
						</div>
						<div className="form-row">
							<label>First Name:</label>
							<span>{teacher.FirstName}</span>
						</div>
						<div className="form-row">
							<label>Last Name:</label>
							<span>{teacher.LastName}</span>
						</div>
						<div className="form-row">
							<label>Date of Birth:</label>
							<span>
								{teacher.DateOfBirth &&
									new Date(
										teacher.DateOfBirth
									).toLocaleDateString()}
							</span>
						</div>
						<div className="form-row">
							<label>Gender:</label>
							<span>{teacher.Gender}</span>
						</div>
						<div className="form-row">
							<label>Email:</label>
							<span>{teacher.Email}</span>
						</div>
						<div className="form-row">
							<label>Phone Number:</label>
							<span>{teacher.PhoneNumber}</span>
						</div>
						<div className="form-row">
							<label>Address:</label>
							<span>{teacher.Address}</span>
						</div>
						<div className="form-row">
							<label>Salary:</label>
							<span>{teacher.Salary}</span>
						</div>
						<div className="form-row">
							<label>Status:</label>
							<span>{teacher.Status}</span>
						</div>
						<div className="form-row">
							<label>Date of Joining:</label>
							<span>
								{teacher.DateOfJoining &&
									new Date(
										teacher.DateOfJoining
									).toLocaleDateString()}
							</span>
						</div>
					</form>
				</div>
				<div className="img-teacher">
					<img
						src={teacherImg}
						alt="teacher-image"
					/>
				</div>
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
		</>
	);
};

export default SpecificTeacherData;
