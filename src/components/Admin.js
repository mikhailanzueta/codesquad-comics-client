import React from "react";
import {useState, useEffect} from 'react'
import { useNavigate, Link } from "react-router-dom";

import '../css/styles.css'


function Admin() {
    const [books, setBooks] = useState([]); // Updated state to hold books from the database
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:8080/api/books`, {
            method: "GET",
        })
            .then((response) => response.json())
            .then((result) => {
                if (result.statusCode === 200) {
                    setBooks(result.data); // Set the books state from the fetched result
                } else {
                    console.error('Data could not be fetched');
                }
            })
            .catch(error => console.error("There was a problem fetching the data: ", error));
    }, []);


    return (
        <main>
            <div className="admin-container">
                <div className="admin-page">
                    <h1>ADMIN PAGE</h1>
                </div>
                <br></br>
                <button id="button" onClick={() => navigate(`/Create`)}>ADD NEW COMIC</button>
                <br></br>
                <div className="overflow-x">
                    <table className="comic-table">
                        <thead>
                            <tr>
                                <th>COMIC TITLE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {books.map((book) => (
                                <tr key={book._id}>
                                    <td>{book.title}</td>
                                    <td><button id="button" className="edit-btn" onClick={() => navigate(`/books/${book._id}/update`)}>EDIT</button></td>
                                    <td><button id="button" className="delete-btn" onClick={() => navigate(`/books/${book._id}/delete`)}>DELETE</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    );
}

export default Admin