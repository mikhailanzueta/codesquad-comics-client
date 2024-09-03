import React from "react";
import { useNavigate, Link } from "react-router-dom";
import '../css/styles.css'

function Login({user, setUser}) {
    const navigate = useNavigate();
    const loginFormSubmission = (e) => {
        e.preventDefault();
        console.log(`This method ran.`)
        console.log(e.target.username.value)
        console.log(e.target.password.value)

        const body = {
            username: e.target.username.value,
            password: e.target.password.value
        }

        fetch("http://localhost:8080/login/local",{
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
            .then((response) => response.json())
            .then((result) => {
                if (result.statusCode === 200) {
                    console.log('Success!: ', result)
                    setUser(result.data)
                    localStorage.setItem('user', JSON.stringify(result.data))
                    navigate('/Admin')
                } else {
                    console.log("Something went wrong!")
                }
            })
            .catch((error) => console.log('There was a problem fetching the data: ', error))
    }

    return (
        <div className="login-page">
            <h1>LOGIN PAGE</h1>
            <form onSubmit={loginFormSubmission}>
            <div>
                <label htmlFor="username">Username:</label>
                <input type="text" name="username" id="username" required />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" id="password" required />
            </div>
            <button type="submit">Login</button>
            <Link to="/signup" className="signup-btn">Don't have an account?</Link>
            </form>
      </div>
    )
}

export default Login