import React from "react";
import { useNavigate, Link } from "react-router-dom";
import '../css/styles.css'

function Login({user, setUser}) {
    const navigate = useNavigate();
    const loginFormSubmission = (e) => {
        e.preventDefault();
        console.log(`This method ran.`)
        console.log(e.email.value)
        console.log(e.password.value)

        const body = {
            email: e.target.email.value,
            password: e.target.password.value
        }

        fetch("http://localhost:8080/login/local",{
            method: "POST",
            body: JSON.stringify(body)
        })
            .then((response) => response.json())
            .then((result) => {
                if (result.statusCode === 200) {
                    console.log('Success!')
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
                <label htmlFor="email">Email:</label>
                <input type="text" name="email" id="email" required />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" id="password" required />
            </div>
            <button type="submit">Login</button>
            </form>
      </div>
    )
}

export default Login