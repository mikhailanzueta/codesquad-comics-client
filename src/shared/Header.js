import React from "react";
import {useState, useEffect} from 'react'
import { useNavigate, Link } from "react-router-dom";

function Header() {
    const navigate = useNavigate();
    const [user, setUser] = useState({})

    const handleLogout = (e) => {
        fetch("http://localhost:8080/logout", {
            method: "GET",
        })
            .then((response) => response.json())
            .then((result) => {
                if(result.statusCode === 200) {
                    console.log('Success!')
                    setUser({})
                    localStorage.removeItem('user')
                    navigate('/')
                }
            })
            .catch(error => {
                console.log('There was a problem fetching the data: ', error)
                navigate('/Admin') 
            })
             
        
            {user.username ? (
                <>
                    <Link to='/Admin'>Admin</Link>
                    <a href="#" onClick={handleLogout}>Logout</a>
                </>
            ) : (
                <Link to='/Login'>Login</Link>
            )}
    }


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
                            <Link to="/">HOME</Link>
                        </li>
                        <li>
                            <Link to="/About">ABOUT</Link>
                        </li>
                        <li>
                            <Link to="/Login">LOGIN</Link>
                        </li>
                        <li>
                            <a href="#" onClick={handleLogout}>LOGOUT</a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    </main>
    )
}

export default Header