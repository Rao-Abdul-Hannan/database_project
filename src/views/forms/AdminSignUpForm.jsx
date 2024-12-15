import React, { useState } from 'react'
import '../../style/adminForm.css'
import { Link, useNavigate } from 'react-router-dom'

const AdminSignUpForm = () => {
    const navigate = useNavigate();
    const [signUp, setSignUp] = useState({
        name: '',
        email: '',
        password: '',
    })

    const HandleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setSignUp({ ...signUp, [name]: value });
    }

    const HandleSubmit = async (e) => {
        e.preventDefault();

        setSignUp({
            name: '',
            email: '',
            password: '',
        })

        navigate("/auth/admin-login");
    }
    return (
        <>
            <div className="new-student">
                <form action="" onSubmit={HandleSubmit} className="login-form py-5">
                    {/* name start */}
                    <div className="form-floating mb-3 mx-5">
                        <input type="name" name="name" className="form-control" id="floatingInput name" placeholder="John Doe" value={signUp.name} onChange={HandleInput} />
                        <label htmlFor="floatingInput">Name</label>
                    </div>
                    {/* name end */}
                    {/* email start */}
                    <div className="form-floating mb-3 mx-5">
                        <input type="email" name="email" className="form-control" id="floatingInput email" placeholder="name@example.com" value={signUp.email} onChange={HandleInput} />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    {/* email end */}
                    {/* password start */}
                    <div className="form-floating mb-3 mx-5">
                        <input type="password" name="password" className="form-control" id="floatingInput password" placeholder="****" value={signUp.password} onChange={HandleInput} />
                        <label htmlFor="floatingInput">Password</label>
                    </div>
                    {/* password end */}
                    <div className="signUp-button">
                        <div className="button">
                            <button type="submit" className="form-floating mb-3 mx-5 button-styling">Sign Up</button>
                        </div>
                        <div className="already-text">
                            <Link to='/login-form' className='already-text-styling'>Already have an account?</Link>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default AdminSignUpForm