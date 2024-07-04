import React from "react";
import { useNavigate } from "react-router-dom";


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
        <main>
            <section className="login">
                <h1>LOGIN</h1>
                <form action="#" className="email-login" onSubmit={loginFormSubmission}>
                    <label htmlFor="email" className="email-field">Email address:
                        <input type="email" className="email-input" id="email" placeholder="Email" required/>
                    </label>
                </form>
                <br></br>
                <form action="#" className="password-login">
                    <label htmlFor="password" className="password-field">Password:
                        <input type="password" className="email-input" id="password" placeholder="Password" required/>
                    </label>
                </form>
                <br></br>
                <button id="button">Submit</button>
            </section>
        </main>
    )
}

export default Login