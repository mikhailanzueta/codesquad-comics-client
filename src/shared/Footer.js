import React from "react";
import { useNavigate, Link } from "react-router-dom";
import '../css/styles.css'



function Footer() {
    return (
        <>
                <div className="footer-container">
                    <div className="Footer">
                        <div className="visit-us">
                            <h2>VISIT US</h2>
                            <p>
                                CodeSquad Comics
                                <br></br>
                                123 Dorchester Avenue
                                <br></br>
                                Boston, MA 02124
                            </p>
                        </div>
                        <div className="Links">
                            <h2>LINKS</h2>
                            <p>
                                <Link to="/">Home</Link>
                                <br></br>
                                <Link to="/About">About</Link>
                                <br></br>
                                <Link to="/Login">Login</Link>
                            </p>
                        </div>
                        <div className="Follow-Us">
                            <h2>FOLLOW US</h2>
                            <p>
                                <Link to="#">Facebook</Link>
                                <br></br>
                                <Link to="#">Instagram</Link>
                                <br></br>
                                <Link to="#">Twitter</Link>
                            </p>
                        </div>
                        <div className="Product-Of-Footer">
                            <h2>A PRODUCT OF</h2>
                            <Link to="#" target="_blank" rel="nofollow">
                                <img src={`./images/CodeSquad-logo.png`} alt="CodeSquad-logo-b" />
                            </Link>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default Footer