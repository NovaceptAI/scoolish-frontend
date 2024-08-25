import React, { useEffect, useState } from 'react';
import '../styles/Login.css'; // Assuming your CSS is in this file

function Login() {
    const [isLogin, setIsLogin] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        // When the component mounts
        document.body.classList.add('login-body');

        // Cleanup function to be called when the component unmounts
        return () => {
            document.body.classList.remove('login-body');
        };
    }, []); // Empty dependency array ensures this effect runs only once on mount and cleanup on unmount

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const data = new FormData(form);
        const url = isLogin ? 'http://192.168.1.5:5000/auth/login' : 'http://192.168.1.5:5000/auth/signup';

        fetch(url, {
            method: 'POST',
            body: data
        })
        .then(response => response.json())
        .then(data => {
            if (data.status === 'success') {
                window.location.href = '/upload';
            } else {
                setErrorMessage(data.message);
            }
        })
        .catch(() => {
            setErrorMessage('An error occurred. Please try again.');
        });
    };

    return (
        <div className="login-container">
            <div className="login-left-panel">
                <img src="/static/scoolish.jpg" alt="Schoolish Logo" className="logo" />
                <img src="/static/students_studying.jpg" alt="Analysis Image" />
            </div>
            <div className="login-right-panel">
                <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
                <form onSubmit={handleFormSubmit}>
                    <div className="login-form-group">
                        <label>{isLogin ? 'Enter Username' : 'Choose Username'}</label>
                        <input type="text" name="username" placeholder="Enter your username" required />
                    </div>
                    <div className="login-form-group">
                        <label>Password</label>
                        <input type="password" name="login_password" placeholder="Enter password" required />
                    </div>
                    <button className="btn" type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
                    <div className="login-error-message">{errorMessage}</div>
                </form>
                <div className="login-signup-link">
                    {isLogin ? 'Don’t have an account?' : 'Already have an account?'}
                    <a href="#" onClick={(e) => {
                        e.preventDefault(); // Prevent the default anchor link behavior
                        setIsLogin(!isLogin); 
                        setErrorMessage(''); // Reset any error messages
                    }}>
                        {isLogin ? ' Sign up' : ' Login'}
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Login;
