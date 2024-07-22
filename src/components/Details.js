import React from "react";
import {useState, useEffect} from 'react'
import { useNavigate, Link, useParams } from "react-router-dom";
// import booksData from '../data/books'
import '../css/styles.css'

function Details() {
    const [book, setBook] = useState([])
    const { bookId } = useParams()

    useEffect(() => {
        fetch(`http://localhost:8080/api/books/${bookId}`, {
            method: "GET",
        })
            .then((response) => response.json())
            .then((result) => setBook(result.data))
            .catch(error => console.error('There was a problem fetching the data: ', error))
    }, [book])

    return (
        <main>
            <div className="Navbar-container">
                <div className="Navbar">
                    <nav className="navbar-logo">
                        <img src="public/images/CodeSquad-Comics-logo.png" alt="codesquad-comics-logo"/>
                    </nav>
                </div>
                <div className="nav-links">
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
                <label htmlFor="check" className="check-btn">
                    <i className="fa fa-bars"></i>
                </label>
            </div>



                <div>
                    <div key={book.id} className="Comic-Collection">
                        <img src={`./images/${book.image}`} alt={book.title}/>
                    </div>
                    <div className="Comic-Collection">
                    <p className="book-title">Title: {book.title}</p>
                    </div>
                    <div className="Comic-Collection">
                    <p className="book-author">Author: {book.author}</p>
                    </div>
                    <div className="Comic-Collection">
                    <p className="book-publisher">Publisher: {book.publisher}</p>
                    </div>
                    <div className="Comic-Collection">
                    <p className="book-genre">Genre: {book.genre}</p>
                    </div>
                    <div className="Comic-Collection">
                    <p className="book-pages">Pages: {book.pages}</p>
                    </div>
                    <div className="Comic-Collection">
                    <p className="">Rating: {book.rating}</p>
                    </div>
                    <div className="Comic-Collection">
                    <p className="">Synopsis: {book.synopsis}</p>
                    </div>
                    <div className="Comic-Details">
                    <a href="#">Details</a>
                    </div>
                </div>
        </main>
        
    )
}

export default Details;