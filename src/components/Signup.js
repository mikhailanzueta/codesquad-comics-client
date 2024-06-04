import React from "react";

function Signup({user, setUser}) {
    const signupFormSubmission = (e) => {
        e.preventDefault();
        console.log(`This method ran.`)
        console.log(e.target.value)

    }
    return(
        <main>
            <form className="signup-form" action="#" onSubmit={signupFormSubmission}>
                <h2>Signup</h2>
                <div className="form-group">
                    <label htmlFor="first-name">First Name</label>
                    <input type="text" id="first-name" name="first-name" required />
                </div>
                <div className="form-group">
                    <label htmlFor="last-name">Last Name</label>
                    <input type="text" id="last-name" name="last-name" required />
                </div>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" name="username" required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <div className="form-group">
                    <button type="submit">Signup</button>
                </div>
            </form>
        </main>
    )
}
export default Signup;