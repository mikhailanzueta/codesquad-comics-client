import React from "react";

function Login({user, setUser}) {

    const loginFormSubmission = (e) => {
        e.preventDefault();
        console.log(`This method ran.`)
        console.log(e.email.value)
        console.log(e.password.value)
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