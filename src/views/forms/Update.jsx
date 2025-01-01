import { useToast } from '@chakra-ui/react';
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Update = () => {
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

		setSearch({
			id: "",
			category: "",
		});

		if (category == "student") {
			navigate(`/update-student/${id}`);
		} else if (category == "teacher") {
			navigate(`/update-teacher/${id}`);
		} else if (category == "event") {
			navigate(`/update-event/${id}`);
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
							<option value="event">Event</option>
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

export default Update;