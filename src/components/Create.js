import React from "react";
import { useNavigate, Link } from "react-router-dom";
import '../css/styles.css'

import {useState, useEffect} from 'react'

function Create() {
    const navigate = useNavigate();
    const createFormSubmission = (e) => {
        e.preventDefault();

        // Create a FormData object to hold the form data, including the image file
    const formData = new FormData();
    formData.append("title", e.target.elements.title.value);
    formData.append("author", e.target.elements.author.value);
    formData.append("publisher", e.target.elements.publisher.value);
    formData.append("genre", e.target.elements.genre.value);
    formData.append("pages", e.target.elements.pages.value);
    formData.append("rating", e.target.elements.rating.value);
    formData.append("synopsis", e.target.elements.synopsis.value);
    formData.append("image", e.target.elements.image.files[0]);

        fetch("http://localhost:8080/api/books/create", {
            method: "POST",
            body: formData,
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

    const [file, setFile] = useState()
    function handleImage(e) {
        console.log(e.target.files)
        setFile(URL.createObjectURL(e.target.files[0]))
    }


    return (
        <main>

            <div className="create-comic-container">
                <div className="create-comic">
                    <h1>CREATE NEW COMIC</h1>
                    <form action="/api/books" className="comic-form"  onSubmit={createFormSubmission}>
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
                        <div>
                            <label htmlFor="image">Book Image:
                                <input type="file" name="image" onChange={handleImage} />
                                <img src={file} />
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