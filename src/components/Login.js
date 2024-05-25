import React from "react";

function Login() {
    return (
        <main>
            <section className="login">
                <h1>LOGIN</h1>
                <form action="#" className="email-login">
                    <label htmlFor="email" className="email-field">Email address:
                        <input type="email" className="email-input" id="email" placeholder="Email"/>
                    </label>
                </form>
                <br></br>
                <form action="#" className="password-login">
                    <label htmlFor="password" className="password-field">Password:
                        <input type="password" className="email-input" id="password" placeholder="Password"/>
                    </label>
                </form>
                <br></br>
                <button id="button">Submit</button>
            </section>
        </main>
    )
}

export default Login