import React from "react";
import {useState, useEffect} from 'react'
import { useNavigate, Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import '../css/styles.css'


function Header() {
    const navigate = useNavigate();
    const [user, setUser] = useState({})
    const [isMenuOpen, setMenuOpen] = useState(false)


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

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen)
    }


    return (
        <main>
            <header>
                <div className="Navbar-container">
                    <div className="Navbar">
                        <nav className="navbar-logo">
                            <img src={`../images/CodeSquad-Comics-logo.png`} alt="codesquad-comics-logo" />
                        </nav>
                    </div>
                    <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
                            <ul className="navbar-navigation">
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/About">About</Link>
                                </li>
                                <li>
                                    <Link to="/Login">Login</Link>
                                </li>
                            </ul>
                    </div>
                    <input type="checkbox" id="check" />
                    <label htmlFor="check" className="check-btn" onClick={toggleMenu}>
                        <FontAwesomeIcon icon={isMenuOpen ? faXmark : faBars} className="fa fa-bars" />
                    </label>
                </div>
            </header>
        </main>
    )
}

export default Header