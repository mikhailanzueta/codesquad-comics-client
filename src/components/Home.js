import React from "react";
import { useNavigate, Link } from "react-router-dom";
import {useState, useEffect} from 'react'
// import Books from '../data/books'
import '../css/styles.css'


function Home() {
    const [books, setBooks] = useState([])

    useEffect(() => {
        fetch("http://localhost:8080/api/books/", {
            method: "GET",
        })
            .then((response) => response.json())
            .then((result) => {
                console.log(result)
                console.log(typeof result)
                result.forEach(book => {
                    if (book.image){
                        console.log(book.image.replace(".jpg", ".jpeg"))}
                    else {
                        console.warn("no book image", book)
                    }
                })
                setBooks(result)
            })
            .catch(error => console.error('There was a problem fetching the data: ', error))
    }, [])

    return (
        <main>
            <div className="header-container">
                <div className="codesquad-header">
                    <h1>CODESQUAD COMICS</h1>
                    <p className="Caption">CodeSquad Comics is a collection of graphic novels read by Mikhail Anzueta. 
                        The site is intended to display comic book covers along with information about each book, including the author, a rating, and other details about the graphic novel. 
                        Browse through the complete collection below. 
                        Click on the cover image or the Details link to see even more information about each graphic novel including the publisher, genre, number of pages, and a brief synopsis. 
                        The About page includes meta information about this collection. 
                    </p>
                </div>
            </div>

            <div className="comic-container">
                <h1>COMPLETE COLLECTION</h1>
                <div className="collection-container">
                    {books.map((book) => 
                        <div key={book._id}>
                            <div  className="Comic-Collection">
                                <img src={book.image.includes('http') || book.image.includes('https') 
    ? book.image 
    : `/images/${book.image}`}  alt={book.title}/>
                            </div>
                            <div className="Comic-Collection">
                               <p className="book-title">Title: {book.title}</p>
                            </div>
                            <div className="Comic-Collection">
                               <p className="book-author">Author: {book.author}</p>
                            </div>
                            <div className="Comic-Collection">
                               <p className="">Rating: {book.rating}</p>
                            </div>
                            <div className="Comic-Details">
                               <Link to ={`/Details/${book._id}`}>Details</Link>
                            </div>
                        </div>
                    )}
                    <br></br>
                </div>
                <button id="button">DISPLAY MORE</button>
            </div>
        </main>
    )
}

export default Home;