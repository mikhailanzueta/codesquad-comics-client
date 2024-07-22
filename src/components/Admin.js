import React from "react";
import {useState, useEffect} from 'react'
import { useNavigate, Link } from "react-router-dom";
import Books from "../data/books";
import '../css/styles.css'


function Admin() {
    const [books, setBooks] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:8080/api/books`, {
            method: "GET",
        })
            .then((response) => response.json())
            .then((result) => {
                if (result.statusCode === 200) {
                    setBooks(result.data); // Adjusted to access the data
                } else {
                    console.error('Data could not be fetched');
                }
            })
            .catch(error => console.error("There was a problem fetching the data: ", error));
    }, []);

    // const handleEdit = async (id) => {
    //     try {
    //         const response = await fetch(`http://localhost:8080/api/books/${id}`, {
    //             method: "GET",
    //         })
    //         const result = await response.json();
    //         if (result.statusCode === 200) {
    //             navigate(`/books/${id}/Update`, { state: { book: result.data } });
    //         } else {
    //             console.error('Book could not be fetched');
    //         }
    //     } catch (error) {
    //         console.error("There was a problem fetching the book: ", error);
    //     }
    // };

    // const handleDelete = (bookId) => {
    //     fetch(`http://localhost:8080/api/books/delete/${bookId}`, {
    //         method: "DELETE",
    //     })
    //     .then((response) => response.json())
    //     .then((result) => {
    //         if (result.statusCode === 200) {
    //             console.log('Success!')
    //         } else {
    //             console.error(`Book with ${bookId} could not be fetched`)
    //         }
    //     })
    //     .catch(error => console.error("There is a problem with the delete operation: ", error))
    // }

    return (
        <main>

            <div key={books.id} className="admin-container">
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
                            {Books.map((book) => 
                                <tr key={book._id}>
                                    <td>{book.title}</td>
                                    <td><button id="button" className="edit-btn" onClick={() => navigate(`/books/${book._id}/update`)}>EDIT</button></td>
                                    <td><button id="button" className="delete-btn" onClick={() => navigate(`/books/${book._id}/update`)}>DELETE</button></td>
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