import React from "react";
import { useNavigate } from "react-router-dom";

// import {useState, useEffect} from 'react'

function Create() {
    const navigate = useNavigate();
    const createFormSubmission = (e) => {
        e.preventDefault();
        console.log(`This method ran.`)
        console.log(e.title.value)
        console.log(e.author.value)
        console.log(e.publisher.value)
        console.log(e.genre.value)
        console.log(e.pages.value)
        console.log(e.rating.value)
        console.log(e.synopsis.value)

        const body = {
            title: e.target.title.value,
            author: e.target.author.value,
            publisher: e.target.publisher.value,
            genre: e.target.genre.value,
            pages: e.target.pages.value,
            rating: e.target.rating.value,
            synopsis: e.target.synopsis.value,
          }

        fetch("http://localhost:8080/api/books/create", {
            method: "POST",
            body: JSON.stringify(body)
        })
            .then((response) => response.json())
            .then((result) => {
                if (result.statusCode === 200) {
                    console.log('Success!');
                    navigate('/Admin');
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
                                <select name="publisher" id="publisher">
                                    <option value="" selected>Select</option>
                                    <option value="BOOM! Box">BOOM! Box</option>
                                    <option value="DC Comics">DC Comics</option>
                                    <option value="Harry N. Abrams">Harry N. Abrams</option>
                                    <option value="Icon Comics">Icon Books</option>
                                    <option value="Image Comics">Image Comics</option>
                                    <option value="Marvel">Marvel</option>
                                    <option value="Simon & Schuster">Simon & Schuster</option>
                                    <option value="Top Shelf Productions">Top Shelf Productions</option>
                                    <option value="VIZ Media LLC">VIZ Media LLC</option>
                                </select>
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