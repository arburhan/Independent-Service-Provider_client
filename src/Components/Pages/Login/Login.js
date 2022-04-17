import React from 'react';
import Form from 'react-bootstrap/Form';
import { useLocation, useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || '/';
    const redirectRegister = () => {
        navigate('/register' + location.search);
    }

    return (
        <div className='container-fluid w-75 mx-auto pt-5'>
            <Form className='text-center'>
                <div className='' >
                    <label className='d-block text-start' htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" required />
                </div>
                <div className='py-3' >
                    <label className='d-block text-start' htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" required />
                </div>
            </Form>
            <div className='text-center'>
                <div>
                    New on AR Wild-Grapher? <button onClick={redirectRegister} className='signup-redirect'>Please Register</button>
                </div>
                <div className=''>
                    <button className='btn submit-btn'>Login</button>
                </div>
            </div>
        </div>
    );
};

export default Login;