import React from "react";
import {useState, useEffect} from 'react'
import { useNavigate, Link, useParams } from "react-router-dom";
import Books from '../data/books'
import '../css/styles.css'

function getBookById(bookId) {
    for (const book of Books) {
        if (bookId === book._id) {
            return book
        }
    }
    return null
}



function Details() {
    const { bookId } = useParams()
    console.log(bookId)
     const Book = getBookById(bookId)
    // console.log("Books:", Books);
    // console.log("BookId:", bookId);

    const [book, setBook] = useState([Book])

    useEffect(() => {
        fetch(`http://localhost:8080/api/books/${bookId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((result) => {
                console.log(result.data)
                setBook(result.data)
            })
            .catch(error => console.error('There was a problem fetching the data: ', error))
    }, [])

    console.log(Book)


    return (
        <main>

            {!Book ? (
                <div>Loading...</div>
            ) : (
                <div className="container">
                    <div className="card-container">
                        <div key={Book._id} className="card-title">
                            <h1>{Book.title}</h1>
                            <img src={`../images/${Book.image}`} alt={book.title}/>
                        </div>
                        <div className="comic-information">
                            <div className="comic-body">
                                {Object.entries(Book)
                                .filter(([key]) => key !== '_id' && key !== 'image')
                                .map(([key, value]) => (
                                    <p>
                                        <span>{key.charAt(0).toUpperCase() + key.slice(1)}:</span> {value}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>
                    
                    
                </div>
            )}
        </main>
        
    )
}

export default Details;