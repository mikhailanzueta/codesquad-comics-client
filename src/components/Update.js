import React from "react";
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from "react-router-dom";
import booksData from '../data/books'


function Update() {
    const navigate = useNavigate();
    const { bookId } = useParams();
    const [book, setBook] = useState({})

    useEffect(() => {
        fetch("`http://localhost:8080/api/books/${bookId}`", {
            method: "GET",
        })
            .then((response) => response.json())
            .then((result) => {
                if (result.statusCode === 200) {
                    console.log("Success")
                    setBook(result.data)
                }
            })
            .catch(error => console.log('There was a problem fetching the data: ', error))
    }, [])

    const updateFormSubmission = (e) => {
        console.log(`This method ran.`)
        console.log(e.target.title.value)
        console.log(e.target.author.value)
        console.log(e.target.publisher.value)
        console.log(e.target.genre.value)
        console.log(e.target.pages.value)
        console.log(e.target.rating.value)
        console.log(e.target.synopsis.value)

        const body = {
            title: e.target.title.value,
            author: e.target.author.value,
            publisher: e.target.publisher.value,
            genre: e.target.genre.value,
            pages: e.target.pages.value,
            rating: e.target.rating.value,
            synopsis: e.target.synopsis.value,
            
        }

        fetch(`http://localhost:8080/api/books/update/${bookId}`, {
            method: "PUT",
            body: JSON.stringify(body)
        })
            .then((response) => response.json())
            .then((result) => {
                if (result.statusCode === 200) {
                    console.log("Success!")
                    setBook(result.data)
                    navigate('/Admin')
                }
            })
            .catch(error => console.log("There was a problem fetching the data: ", error))
    }

    return (
        <main>
            <div className="update-comic-container">
                <div className="update-create-comic">
                    <h1>UPDATE COMIC</h1>
                    <form action="#" className="update-comic-form" onSubmit={updateFormSubmission}>
                        <div>
                            <label htmlFor="title" className="title-field">Title: 
                                <input type="text" value={book.title} className="title-input" id="title" placeholder="Title" required/>
                            </label>
                        </div>
                        <br></br>
                        <div>
                            <label htmlFor="author" className="author-field">Author:
                                <input type="text" value={book.author} className="author-input" id="author" placeholder="Author" required/>
                            </label>
                        </div>
                        <br></br>
                        <div>
                            <label htmlFor="publisher">Publisher: 
                                <select name="publisher" id="publisher" value={book.publisher}>
                                    <option value="publisher value stored in the database" selected>publisher value stored in the database</option>
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
                                <input type="text" value={book.genre} className="genre-input" id="genre" placeholder="Genre" required/>
                            </label>
                        </div>
                        <br></br>
                        <div>
                            <label htmlFor="pages">Number of Pages: 
                                <input type="text" value={book.pages} className="pages-input" id="pages" placeholder="Pages stored in database" required/>
                            </label>
                        </div>
                        <br></br>
                        <div>
                            <label htmlFor="rating">Rating: 
                                <input type="text" value={book.rating} className="rating-input" id="rating" placeholder="Rating stored in database" required/>
                            </label>
                        </div>
                        <br></br>
                        <div>
                            <label htmlFor="synopsis">Synopsis: 
                                <textarea name="synopsis" id="synopsis" placeholder="Synopsis value stored in the database" value={book.synopsis}></textarea>
                            </label>
                        </div>
                        <br></br>
                        <button id="button">Submit</button>
                    </form>
                </div>
            </div>
        </main>
    )
}

export default Update