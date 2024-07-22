import React from "react";
import { useNavigate, Link } from "react-router-dom";
import '../css/styles.css'

// import {useState, useEffect} from 'react'

function Create() {
    const navigate = useNavigate();
    const createFormSubmission = (e) => {
        e.preventDefault();
        // console.log(`This method ran.`)
        // console.log(e.title.value)
        // console.log(e.author.value)
        // console.log(e.publisher.value)
        // console.log(e.genre.value)
        // console.log(e.pages.value)
        // console.log(e.rating.value)
        // console.log(e.synopsis.value)

        const body = {
            title: e.target.elements.title.value,
            author: e.target.elements.author.value,
            publisher: e.target.elements.publisher.value,
            genre: e.target.elements.genre.value,
            pages: e.target.elements.pages.value,
            rating: e.target.elements.rating.value,
            synopsis: e.target.elements.synopsis.value,
          }

        fetch("http://localhost:8080/api/books/create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        })
            .then((response) => response.json())
            .then((result) => {
                if (result.statusCode === 201) {
                    console.log('Success!');
                    navigate('/Admin');
                } else {
                    console.log(`Failed to create book: `, result)
                }
            })
            .catch(error => console.log('There was a problem fetching the data: ', error))
    }


    return (
        <main>

            <div className="create-comic-container">
                <div className="create-comic">
                    <h1>CREATE NEW COMIC</h1>
                    <form action="#" className="comic-form" onSubmit={createFormSubmission}>
                        <div>
                            <label htmlFor="title" className="title-field">Title: 
                                <input type="text" className="title-input" id="title" placeholder="Title" required/>
                            </label>
                        </div>
                        <br></br>
                        <div>
                            <label htmlFor="author" className="author-field">Author:
                                <input type="text" className="author-input" id="author" placeholder="Author" required/>
                            </label>
                        </div>
                        <br></br>
                        <div>
                            <label htmlFor="publisher">Publisher: 
                                <input type="text" className="author-input" id="publisher" placeholder="Publisher" required/>
                            </label>
                        </div>
                        <br></br>
                        <div>
                            <label htmlFor="genre">Genre:
                                <input type="text" className="genre-input" id="genre" placeholder="Genre" required/>
                            </label>
                        </div>
                        <br></br>
                        <div>
                            <label htmlFor="pages">Number of Pages: 
                                <input type="text" className="pages-input" id="pages" placeholder="Number of Pages" required/>
                            </label>
                        </div>
                        <br></br>
                        <div>
                            <label htmlFor="rating">Rating: 
                                <input type="text" className="rating-input" id="rating" placeholder="Number (0-5)" required/>
                            </label>
                        </div>
                        <br></br>
                        <div>
                            <label htmlFor="synopsis">Synopsis: 
                                <textarea name="synopsis" id="synopsis" placeholder="synopsis"></textarea>
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

export default Create;