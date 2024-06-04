import React from "react";
import {useState, useEffect} from 'react'
import booksData from '../data/books'

function Home() {
    const [books, setBooks] = useState([])

    useEffect(() => {
        setBooks(booksData)
    }, [books])

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
                        Login is only available to the site administrator at this time.
                    </p>
                </div>
            </div>

            <div className="comic-container">
                <h1>COMPLETE COLLECTION</h1>
                <div className="collection-container">


                    {booksData.map((books) => 
                        <div>
                            <div key={books.id} className="Comic-Collection">
                                <img src={`./images/${books.image}`} alt={books.title}/>
                            </div>
                            <div className="Comic-Collection">
                               <p className="book-title">Title: {books.title}</p>
                            </div>
                            <div className="Comic-Collection">
                               <p className="book-author">Author: {books.author}</p>
                            </div>
                            <div className="Comic-Collection">
                               <p className="book-publisher">Publisher: {books.publisher}</p>
                            </div>
                            <div className="Comic-Collection">
                               <p className="book-genre">Genre: {books.genre}</p>
                            </div>
                            <div className="Comic-Collection">
                               <p className="book-pages">Pages: {books.pages}</p>
                            </div>
                            <div className="Comic-Collection">
                               <p className="">Rating: {books.rating}</p>
                            </div>
                            <div className="Comic-Collection">
                               <p className="">Synopsis: {books.synopsis}</p>
                            </div>
                            <div className="Comic-Details">
                               <a href="#">Details</a>
                            </div>
                        </div>
                    )}
                    <br></br>
                    <button id="button">DISPLAY MORE</button>
                </div>
            </div>
        </main>
    )
}

export default Home;