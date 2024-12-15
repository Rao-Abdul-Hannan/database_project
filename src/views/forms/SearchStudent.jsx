import React, { useState } from "react";
import "../../style/adminForm.css";
import { useNavigate } from "react-router-dom";

const SearchStudent = () => {
    const navigate = useNavigate()
	const [searchStudent, setSearchStudent] = useState({
		id: ""
	});

	const HandleInput = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setSearchStudent({ ...searchStudent, [name]: value });
	};

	const HandleSubmit = async (e) => {
		e.preventDefault();
        console.log(searchStudent)
		setSearchStudent({
			id: ""
		});
        navigate("/specific-student-data");
	};
	return (
		<>
			<div className="new-student">
				<form
					action=""
					onSubmit={HandleSubmit}
					className="login-form py-5"
				>
					{/* id start */}
					<div className="form-floating mb-3 mx-5">
						<input
							type="number"
							name="id"
							className="form-control"
							id="floatingInput name"
							placeholder="1"
							value={searchStudent.name}
							onChange={HandleInput}
						/>
						<label htmlFor="floatingInput">Id</label>
					</div>
					{/* id end */}
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
