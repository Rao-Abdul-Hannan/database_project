import React, { useState } from 'react'
import '../../style/adminForm.css'
import { Link, useNavigate } from 'react-router-dom'
import postApiService from '../../services/postApiService';
import { endPoints } from '../../constants/urls/urls';

const AdminSignUpForm = () => {
    const navigate = useNavigate();
    const [signUp, setSignUp] = useState({
        firstName: '',
		lastName: '',
        email: '',
		cnic: '',
		phoneNo: '',
        password1: '',
    })

    const HandleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setSignUp({ ...signUp, [name]: value });
    }

    const HandleSubmit = async (e) => {
        e.preventDefault();

		console.log(signUp);
		const response = await postApiService(endPoints.ADMIN_SIGNUP, signUp);

		console.log(response);

        setSignUp({
			firstName: "",
			lastName: "",
			email: "",
			cnic: "",
			phoneNo: "",
			password1: "",
		});

        navigate("/auth/sign-in");
    }
    return (
		<>
			<div className="new-student">
				<form
					action=""
					onSubmit={HandleSubmit}
					className="login-form py-5"
				>
					{/* name start */}
					<div className="form-floating mb-3 mx-5">
						<input
							type="name"
							name="firstName"
							className="form-control"
							id="floatingInput name"
							placeholder="John"
							value={signUp.firstName}
							onChange={HandleInput}
						/>
						<label htmlFor="floatingInput">First Name</label>
					</div>
					<div className="form-floating mb-3 mx-5">
						<input
							type="name"
							name="lastName"
							className="form-control"
							id="floatingInput name"
							placeholder="Doe"
							value={signUp.lastName}
							onChange={HandleInput}
						/>
						<label htmlFor="floatingInput">Last Name</label>
					</div>
					{/* name end */}
					{/* email start */}
					<div className="form-floating mb-3 mx-5">
						<input
							type="email"
							name="email"
							className="form-control"
							id="floatingInput email"
							placeholder="name@example.com"
							value={signUp.email}
							onChange={HandleInput}
						/>
						<label htmlFor="floatingInput">Email address</label>
					</div>
					{/* email end */}
					<div className="form-floating mb-3 mx-5">
						<input
							type="text"
							name="cnic"
							className="form-control"
							id="floatingInput name"
							placeholder="xxxxx-xxxxxxx-x"
							value={signUp.cnic}
							onChange={HandleInput}
						/>
						<label htmlFor="floatingInput">CNIC</label>
					</div>
					<div className="form-floating mb-3 mx-5">
						<input
							type="text"
							name="phoneNo"
							className="form-control"
							id="floatingInput name"
							placeholder="+92 xxx xxxxxxx"
							value={signUp.phoneNo}
							onChange={HandleInput}
						/>
						<label htmlFor="floatingInput">Phone No</label>
					</div>
					{/* password start */}
					<div className="form-floating mb-3 mx-5">
						<input
							type="password"
							name="password1"
							className="form-control"
							id="floatingInput password"
							placeholder="****"
							value={signUp.password1}
							onChange={HandleInput}
						/>
						<label htmlFor="floatingInput">Password</label>
					</div>
					{/* password end */}
					<div className="signUp-button">
						<div className="button">
							<button
								type="submit"
								className="form-floating mb-3 mx-5 button-styling"
							>
								Sign Up
							</button>
						</div>
						<div className="already-text">
							<Link
								to="/auth/sign-in"
								className="already-text-styling"
							>
								Already have an account?
							</Link>
						</div>
					</div>
				</form>
			</div>
		</>
	);
}

export default AdminSignUpForm