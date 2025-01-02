import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../style/MoreFunctions.css";

const CreateFunctions = () => {
	const navigate = useNavigate();

	const authTokenAdmin = localStorage.getItem("authTokenAdmin");
		useEffect(() => {
			if (!authTokenAdmin) {
				navigate("/auth/sign-in");
			}
		}, [authTokenAdmin]);

	const links = [
		{ path: "/add-teacher", label: "Add Teacher" },
		{ path: "/add-student", label: "Add Student" },
		{ path: "/add-event", label: "Add Event" },
		{ path: "/admission-data", label: "Admission Data" },
		{ path: "/monthly-fee", label: "Monthly Fee Data" },
		{ path: "/search", label: "Search Student" },
		{ path: "/search", label: "Search Teacher" },
		{ path: "/student-data", label: "Student Data" },
		{ path: "/search", label: "Student Transcript" },
		{ path: "/section-data", label: "Section Data" },
		{ path: "/student-event-data", label: "Student Event Data" },
		{ path: "/subject-data", label: "Subject Data" },
		{ path: "/search", label: "Student Courses" },
		{ path: "/search", label: "Teacher Teaching Sections" },
		{ path: "/search", label: "Student's Event Participations" },
	];

	return (
		<>
			<div className="functions">
				<div className="more-functions">
					<h2 className="title">Add Data</h2>
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

export default CreateFunctions;
