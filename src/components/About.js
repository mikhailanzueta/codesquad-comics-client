import React from "react";
import { useNavigate, Link } from "react-router-dom";
import {useState, useEffect} from 'react'
import'../css/styles.css'

function About() {

    const [books, setBooks] = useState([])
    useEffect(() => {
        fetch('http://localhost:8080/api/books/', {
            method: "GET"
        })
        .then((response) => response.json())
        .then((result) => {
            console.log(result)
            setBooks(result)
        })
        .catch(error => console.error('There was a problem fetching the data: ', error))

    }, [])

    // Total number of comics:
    const totalComics = books.length;

    // Get 5 star rated books:
    const fiveStarComics = books.filter(book => book.rating === 5)

    // Get every publisher:
    const uniquePublishers = [...new Set(books.map(book => book.publisher))]
    return (
        <main>
            <div className="about-codesquad">
                <h1>ABOUT CODESQUAD COMICS</h1>
                <p className="caption">
                    CodeSquad Comics is a collection of graphic novels read by Mikhail Anzueta. Copyrighted images are used for review purposes only. 
                    Meta information about this collection can be found below. 
                    A detailed list of all the graphic novels in this collection can be found on the homepage. 
                    Additional details about each comic book, including the author, genre, number of pages, 
                    and a brief synopsis, can be found by navigating to the homepage and 
                    clicking the image of the book cover or the Details link for the desired graphic novel."
                </p>
                <div className="Collection-Details">
                    <h2>COLLECTION DETAILS</h2>
                    <div className="collection-container">
                        <ul className="collection-details-list">
                            <li>total comic books: {totalComics}</li>
                            <li>5-star ratings: {fiveStarComics.length}</li>
                            <li>publishers: {uniquePublishers.length}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default About;