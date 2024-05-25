import React from "react";

function Header() {
    return (
    <main>
        <header>
            <div class="Navbar-container">
                <div class="Navbar">
                    <nav class="navbar-logo">
                        <img src={`./images/CodeSquad-Comics-logo.png`} alt="codesquad-comics-logo" />
                    </nav>
                </div>
                <div class="nav-links">
                    <ul class="navbar-navigation">
                        <li>
                            <a href="#">HOME</a>
                        </li>
                        <li>
                            <a href="#">ABOUT</a>
                        </li>
                        <li>
                            <a href="#">LOGIN</a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    </main>
    )
}

export default Header