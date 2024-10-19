import React from "react";
import {useState, useEffect} from 'react'
import { useNavigate, Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import '../css/styles.css'


function Header() {
    console.log('header component rendering')
    const navigate = useNavigate();
    const [user, setUser] = useState({})
    const [isMenuOpen, setMenuOpen] = useState(false);

  
    useEffect(() => {
        console.log('useEffect running')
        const savedUser = localStorage.getItem('user');
        if (savedUser) {
            const parsedUser = JSON.parse(savedUser);
            console.log('Parsed user:', parsedUser);  // Debugging log
            setUser(parsedUser);
        } else {
            setUser({});
        }
    }, []);


    const handleLogout = (e) => {
        e.preventDefault()
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
             
    }

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen)
    }

    console.log('User state before rendering:', user);



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
                                {localStorage.getItem('user') ? (
                                    <>
                                        <li>
                                            <Link to="/" onClick={handleLogout}>Logout</Link>
                                        </li>
                                        <li>
                                            <Link to="/Admin">Admin</Link>
                                        </li>
                                    </>
                                        
                                ) : (
                                    <li>
                                        <Link to="/Login">Login</Link>
                                    </li>
                                )}
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