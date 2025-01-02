import React, { useEffect, useRef, useState } from "react";
import "../../style/adminForm.css";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";

const SearchStudent = () => {
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

	const [search, setSearch] = useState({
		id: "",
		category: "",
	});

	const HandleInput = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setSearch({ ...search, [name]: value });
	};

	const HandleSubmit = async (e) => {
		e.preventDefault();
		const { id, category } = search;

		if (!id || !category) {
			toast({
				title: "Error",
				description: "Please fill all fields",
				status: "error",
				duration: 9000,
				isClosable: true,
			});
			return;
		}

		setSearch({
			id: "",
			category: "",
		});

		// console.log(category)
		// console.log(marks)

		if (category == "student") {
			navigate(`/specific-student-data/${id}`);
		} else if (category == "teacher") {
			navigate(`/specific-teacher-data/${id}`);
		} else if (category == "transcript") {
			navigate(`/student-transcript/${id}`);
		} else if (category == "studentCourses") {
			navigate(`/student-courses/${id}`);
		} else if (category == "teachingSections") {
			navigate(`/teacher-teaching-sections/${id}`);
		} else if (category == "eventParticipation") {
			navigate(`/student-participations`);
		}
	};
	return (
		<>
			<div className="new-student">
				<form
					action=""
					onSubmit={HandleSubmit}
					className="login-form py-5"
				>
					<div className="form-floating mb-3 mx-5">
						<input
							type="number"
							name="id"
							className="form-control"
							id="floatingInput name"
							placeholder="1"
							value={search.id}
							onChange={HandleInput}
						/>
						<label htmlFor="floatingInput">Id</label>
					</div>
					<div className="form-floating mb-3 mx-5">
						<select
							name="category"
							className="form-control"
							value={search.category}
							onChange={HandleInput}
						>
							<option value="">Select</option>
							<option value="student">Student</option>
							<option value="teacher">Teacher</option>
							<option value="transcript">Transcript</option>
							<option value="marksFilter">Marks Filter</option>
							<option value="studentCourses">
								Student Courses
							</option>
							<option value="eventParticipation">
								Event Participation
							</option>
							<option value="teachingSections">
								Teacher Teaching Sections
							</option>
						</select>
						<label htmlFor="floatingSelect">Category</label>
					</div>
					<div className="signUp-button">
						<div className="button">
							<button
								type="submit"
								className="form-floating mb-3 mx-5 button-styling"
							>
								Search
							</button>
						</div>
					</div>
				</form>
			</div>
		</>
	);
};

export default SearchStudent;
