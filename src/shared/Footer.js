import React from "react";

function Footer() {
    return (
       <main>
            <footer>
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
                    </div>
                
                    <div className="Links">
                        <h2>LINKS</h2>
                        <p>
                            <a href="#">Home</a>
                            <br></br>
                            <a href="#">About</a>
                            <br></br>
                            <a href="#">Login</a>
                        </p>
                    </div>
                    
                    <div className="Follow-Us">
                        <h2>FOLLOW US</h2>
                        <p>
                            <a href="#">Facebook</a>
                            <br></br>
                            <a href="#">Instagram</a>
                            <br></br>
                            <a href="#">Twitter</a>
                        </p>
                    </div>
                
                    <div className="Product-Of-Footer">
                        <h2>A PRODUCT OF</h2>
                        <a href="#" target="_blank" rel="nofollow">
                            <img src={`./images/CodeSquad-logo.png`} alt="CodeSquad-logo-b" />
                        </a>
                    </div>
                </div>
            </footer>
        </main>
    )
}

export default Footer