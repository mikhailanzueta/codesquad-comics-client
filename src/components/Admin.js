import React from "react";
import {useState, useEffect} from 'react'
import { Link } from "react-router-dom";
import booksData from "../data/books";


function Admin() {
    const [books, setBooks] = useState([])

    useEffect(() => {

        fetch("http://localhost:8080/api/books", {
            method:"GET",
        })
            .then((response) => response.json())
            .then((result) => {
                if (result.statusCode === 200) {
                    setBooks(result)
                } else {
                    console.error('Data could not be fetched')
                }
            })
            .catch(error => console.error("There was a problem fetching the data: ", error))
    }, [])

    const handleDelete = (bookId) => {
        fetch("http://localhost:8080/api/books/delete/${bookId}", {
            method: "DELETE",
        })
        .then((response) => response.json())
        .then((result) => {
            if (result.statusCode === 200) {
                console.log('Success!')
            } else {
                console.error(`Book with ${bookId} could not be fetched`)
            }
        })
        .catch(error => console.error("There is a problem with the delete operation: ", error))
    }

    return (
        <main>
            <div key={books.id} className="admin-container">
                <div className="admin-page">
                    <h1>ADMIN PAGE</h1>
                </div>
                <br></br>
                <button id="button">ADD NEW COMIC</button>
                <br></br>
                <div className="overflow-x">
                    <table className="comic-table">
                        <thead>
                            <tr>
                                <th>COMIC TITLE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {booksData.map((book) => 
                                <tr>
                                    <td>{book.title}</td>
                                    <td><button id="button" className="edit-btn"><Link to="/Update">EDIT</Link></button></td>
                                    <td><button id="button" className="delete-btn" onClick={() => handleDelete(books.id)}>DELETE</button></td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    )
}

export default Admin