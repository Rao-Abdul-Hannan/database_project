import React from "react";
import "../style/home.css";
import { Link, useNavigate } from "react-router-dom";
import adminPicture from "../assets/Images/umairbabar.png";

const Home = () => {
	const navigate = useNavigate();
	const HandleSubmit = (e) => {
		navigate("/auth/admin-login");
	};
	return (
		<>
			<div className="home-main-body">
				<div className="main-body">
					<div className="little-introduction">
						<h3 className="introduction">
							This is little introduction about admin. Admin can
							access the data given on the pages.
						</h3>
					</div>
					<div className="admin-details">
						<div className="admin-content">
							<div className="fields">
								<p className="field-name">Name:</p>
								<p className="field-data">Admin</p>
							</div>
							<div className="fields">
								<p className="field-name">Email:</p>
								<p className="field-data">admin@pucit.edu.pk</p>
							</div>
							<div className="fields">
								<p className="field-name">Phone Number:</p>
								<p className="field-data">+92 319 0610346</p>
							</div>
							<div className="fields">
								<p className="field-name">CNIC:</p>
								<p className="field-data">33202-0713392-7</p>
							</div>
						</div>
						<div className="admin-picture">
							<img
								src={adminPicture}
								alt="admin-picture"
							/>
						</div>
					</div>
					<div className="logout-button">
						<button
							type="submit"
							onClick={HandleSubmit}
							className="form-floating mb-3 button-styling"
						>
							Log Out
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
