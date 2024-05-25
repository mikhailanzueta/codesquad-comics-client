import React from "react";
import booksData from '../data/books'

function Home() {
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


                    {booksData.map((book) => 
                        <div>
                            <div className="Comic-Collection">
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
                    )}
                    <br></br>
                    <button id="button">DISPLAY MORE</button>
                </div>
            </div>
        </main>
    )
}

export default Home;