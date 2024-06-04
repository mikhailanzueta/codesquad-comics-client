import React from "react";

function Signup({user, setUser}) {
    const signupFormSubmission = (e) => {
        e.preventDefault();
        console.log(`This method ran.`)
        console.log(e.firstName.value)
        console.log(e.lastName.value)
        console.log(e.userName.value)
        console.log(e.password.value)

    }
    return(
        <main>
            <form className="signup-form" action="#" onSubmit={signupFormSubmission}>
                <h2>Signup</h2>
                <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" id="firstName" name="firstName" required />
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id="lastName" name="lastName" required />
                </div>
                <div className="form-group">
                    <label htmlFor="userName">Username</label>
                    <input type="text" id="userName" name="userName" required />
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