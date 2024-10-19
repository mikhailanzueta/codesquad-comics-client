import React from "react";
import {useState, useEffect} from 'react'
import { useNavigate, Link, useParams, useLocation } from "react-router-dom";
import '../css/styles.css'




function Details() {
    
    // console.log("Books:", Books);
    // console.log("BookId:", bookId);
    const location = useLocation();
    const bookId = location.pathname.split('/')[2]
    const [book, setBook] = useState(null)
    console.log(bookId)

    useEffect(() => {
        fetch(`http://localhost:8080/api/books/${bookId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((result) => {
                console.log(result)
                setBook(result)
            })
            .catch(error => console.error('There was a problem fetching the data: ', error))
    }, [])

    if (!book) {
        return <p>Loading...</p>;  // Display loading state while fetching the book data
    }



    return (
        <main>

                <div className="container">
                    <div className="card-container">
                        <div key={book._id} className="card-title">
                            <h1>{book.title}</h1>
                            <img
                            src={book.image && (book.image.includes('http') || book.image.includes('https'))
                                ? book.image
                                : `/images/${book.image}`}
                            alt={book.title}
                        />
                        </div>
                        <div className="comic-information">
                            <div className="comic-body">
                                {Object.entries(book)
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
            
        </main>
        
    )
}

export default Details;