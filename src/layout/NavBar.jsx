import React, { useEffect, useState } from "react";
import logo from "../assets/Images/WhatsApp Image 2024-12-11 at 19.13.55_76c2380c.jpg";
import "../style/navBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
	const [charIndex, setCharIndex] = useState(0);
	let text = "Care Grammar School";
	useEffect(() => {
		const intervalId = setInterval(() => {
			setCharIndex((prevIndex) =>
				prevIndex < text.length ? prevIndex + 1 : 0
			);
		}, 150); //every 100 milliseconds charIndex state gets incremented by 1 and string got sliced from (0, charIndex)

		return () => clearInterval(intervalId); // Cleanup the interval on component unmount
	}, [text]);

	return (
		<>
			<div>
				<div className="navbar">
					<div className="header">
						<div className="p-3">
							<img
								src={logo}
								alt="care_logo"
								className="image-footer"
								width={100}
								height={60}
							/>
						</div>
						<div className="animated-line p-3">
							<h2 className="top-heading">
								<span className="individual-letter">
									{text.slice(0, charIndex)}
								</span>
							</h2>
						</div>
					</div>
					<div className="toggle-buttons">
						<div className="btn-group">
							<button
								className="btn btn-secondary btn-sm"
								type="button"
							>
								Get Data
							</button>
							<button
								type="button"
								className="btn btn-sm btn-secondary dropdown-toggle dropdown-toggle-split"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								<span className="visually-hidden">
									Toggle Dropdown
								</span>
							</button>
							<ul className="dropdown-menu">
								<Link
									to="/student-data"
									className="page-links"
								>
									<p className='page-links-data px-3'>All Students' Data</p>
								</Link>
								<Link
									to="/faculty-data"
									className="page-links"
								>
									<p className='page-links-data px-3'>Faculty Data</p>
								</Link>
								<Link
									to="/student-marksheet"
									className="page-links"
								>
									<p className='page-links-data px-3'>Student Marksheet</p>
								</Link>
								<Link
									to="/monthly-fee"
									className="page-links"
								>
									<p className='page-links-data px-3'>Monthly Fee</p>
								</Link>
								<Link
									to="/search-student"
									className="page-links"
								>
									<p className='page-links-data px-3'>Specific Student's Data</p>
								</Link>
								<Link
									to="/specific-teacher-data"
									className="page-links"
								>
									<p className='page-links-data px-3'>Specific Teacher Data</p>
								</Link>
								<Link
									to="/classroom-data"
									className="page-links"
								>
									<p className='page-links-data px-3'>Class Data</p>
								</Link>
							</ul>
						</div>
						<div className="btn-group">
							<button
								className="btn btn-secondary btn-sm"
								type="button"
							>
								Add Data
							</button>
							<button
								type="button"
								className="btn btn-sm btn-secondary dropdown-toggle dropdown-toggle-split"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								<span className="visually-hidden">
									Toggle Dropdown
								</span>
							</button>
							<ul className="dropdown-menu">...</ul>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default NavBar;
