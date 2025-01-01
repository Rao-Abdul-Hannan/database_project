import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../style/MoreFunctions.css";

const DeleteFunctions = () => {
	const navigate = useNavigate();

	const authTokenAdmin = localStorage.getItem("authTokenAdmin");
	useEffect(() => {
		if (!authTokenAdmin) {
			navigate("/auth/sign-in");
		}
	}, [authTokenAdmin]);

	const links = [
		{ path: "/update-delete-search", label: "Delete Teacher" },
		{ path: "/update-delete-search", label: "Delete Student" },
		{ path: "/update-delete-search", label: "Delete Event" },
	];

	return (
		<>
			<div className="functions">
				<div className="more-functions">
					<h2 className="title">Delete Data</h2>
					<div className="links-container">
						{links.map((link, index) => (
							<Link
								key={index}
								to={link.path}
								className="function-link"
							>
								{link.label}
							</Link>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default DeleteFunctions;
