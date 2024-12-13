import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../../style/adminForm.css'

const AdminLoginForm = () => {
    const navigate = useNavigate();
    const [login, setLogin] = useState({
        email: '',
        password: '',
    });

    const HandleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setLogin({ ...login, [name]: value });
    }

    const HandleSubmit = async (e) => {
        e.preventDefault();
        console.log(login.email, login.password);
        setLogin({ email: '', password: '' });
        navigate('/home');
    }
    return (
        <>
            <div className="new-student">
                <form action="" onSubmit={HandleSubmit} className="login-form">
                    {/* email start */}
                    <div className="form-floating mb-3" >
                        <input type="email" name="email" className="form-control" id="floatingInput email" placeholder="name@example.com" value={login.email} onChange={HandleInput} />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    {/* email end */}
                    {/* password start */}
                    <div className="form-floating mb-3" >
                        <input type="password" name="password" className="form-control" id="floatingInput password" placeholder="****" value={login.password} onChange={HandleInput} />
                        <label htmlFor="floatingInput">Password</label>
                    </div>
                    {/* password end */}
                    <button type="submit" className="form-floating mb-3 button-styling">Login</button>
                </form>
            </div>
        </>
    )
}

export default AdminLoginForm