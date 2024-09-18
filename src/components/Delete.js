import React from "react";
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { useNavigate, Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import '../css/styles.css'
import books from '../data/books'


function parseBookIdFromCurrentPath(url){
    // TODO
    // return bookId (string)
    return url.substring(7, url.length - 7)
    
}

function getBookById(bookId) {
    for (const book of books) {
        if (bookId === book._id) {
            return book
        }
    }
}


function Delete() {

    const navigate = useNavigate()
    const location = useLocation();
    const bookId = parseBookIdFromCurrentPath(location.pathname);
    const Book = getBookById(bookId)
    const [book, setBook] = useState({
        title: '',
        author: '',
        publisher: '',
        genre: '',
        pages: '',
        rating: '',
        synopsis: ''
    });
    console.log(location, book);
    const { title, author, publisher, genre, pages, rating, synopsis } = book;

    useEffect(() => {
        const fetchedBook = getBookById(bookId); 
        setBook(fetchedBook);
    }, [bookId]);

    const handleChange = (e) => {
        setBook({ ...book, [e.target.id]: e.target.value });
    };

    const handleDelete = (e) => {
        e.preventDefault()
        fetch(`http://localhost:8080/api/books/delete/${book._id}`, {
            method: "DELETE",
        })
        .then((response) => response.json())
        .then((result) => {
            if (result.statusCode === 200) {
                console.log('Success!')
                navigate('/Admin')
            } else {
                console.error(`Book with ${book._id} could not be fetched`)
            }
        })
        .catch(error => console.error("There is a problem with the delete operation: ", error))
    }


    return (
        <main>

            <div className="update-comic-container">
                <div className="update-create-comic">
                    <h1>DELETE COMIC</h1>
                    <form action="#" className="update-comic-form" onSubmit={handleDelete}>
                        <div>
                            <label htmlFor="title" className="title-field">Title: 
                                <input type="text" value={title} className="title-input" id="title" onChange={handleChange} required/>
                            </label>
                        </div>
                        <br></br>
                        <div>
                            <label htmlFor="author" className="author-field">Author:
                                <input type="text" value={author} className="author-input" id="author" onChange={handleChange} required/>
                            </label>
                        </div>
                        <br></br>
                        <div>
                            <label htmlFor="publisher">Publisher: 
                                <select name="publisher" id="publisher" value={publisher} onChange={handleChange}>
                                    <option value="publisher value stored in the database">publisher value stored in the database</option>
                                    <option value="BOOM! Box" disabled>BOOM! Box</option>
                                    <option value="DC Comics" disabled>DC Comics</option>
                                    <option value="Harry N. Abrams" disabled>Harry N. Abrams</option>
                                    <option value="Icon Books" disabled>Icon Books</option>
                                    <option value="Image Comics" disabled>Image Comics</option>
                                    <option value="Marvel" disabled>Marvel</option>
                                    <option value="Simon & Schuster" disabled>Simon & Schuster</option>
                                    <option value="Top Shelf Productions" disabled>Top Shelf Productions</option>
                                    <option value="VIZ Media LLC" disabled>VIZ Media LLC</option>
                                </select>
                            </label>
                        </div>
                        <br></br>
                        <div>
                            <label htmlFor="genre">Genre:
                                <input type="text" value={genre} className="genre-input" id="genre" placeholder="Genre" onChange={handleChange} required/>
                            </label>
                        </div>
                        <br></br>
                        <div>
                            <label htmlFor="pages">Number of Pages: 
                                <input type="text" value={pages} className="pages-input" id="pages" placeholder="Pages stored in database" onChange={handleChange} required/>
                            </label>
                        </div>
                        <br></br>
                        <div>
                            <label htmlFor="rating">Rating: 
                                <input type="text" value={rating} className="rating-input" id="rating" placeholder="Rating stored in database" onChange={handleChange} required/>
                            </label>
                        </div>
                        <br></br>
                        <div>
                            <label htmlFor="synopsis">Synopsis: 
                                <textarea name="synopsis" id="synopsis" placeholder="Synopsis value stored in the database" value={synopsis} onChange={handleChange}></textarea>
                            </label>
                        </div>
                        <br></br>

                    

                        <button id="button">Delete</button>
                    </form>
                </div>
            </div>
        </main>
    )
}

export default Delete