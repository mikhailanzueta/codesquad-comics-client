import React from "react";
import {useState, useEffect} from 'react'
import booksData from "../data/books";


function Admin() {
    const [books, setBooks] = useState([])

    useEffect(() => {
        setBooks(booksData)
    }, [])

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
                                <th>EDIT</th>
                                <th>DELETE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {booksData.map((book) => 
                                <tr>
                                    <td>{books.title}</td>
                                    <td><button id="button" className="edit-btn">EDIT</button></td>
                                    <td><button id="button" className="delete-btn">DELETE</button></td>
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