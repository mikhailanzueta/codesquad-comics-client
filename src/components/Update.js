import React from "react";

function Update() {
    return (
        <main>
            <div className="update-comic-container">
                <div className="update-create-comic">
                    <h1>UPDATE COMIC</h1>
                    <form action="#" className="update-comic-form">
                        <div>
                            <label htmlFor="title" className="title-field">Title: 
                                <input type="text" value="title value stored in the database" className="title-input" id="title" placeholder="Title"/>
                            </label>
                        </div>
                        <br></br>
                        <div>
                            <label htmlFor="author" className="author-field">Author:
                                <input type="text" value="author value stored in the database" className="author-input" id="author" placeholder="Author"/>
                            </label>
                        </div>
                        <br></br>
                        <div>
                            <label htmlFor="publisher">Publisher: 
                                <select name="publisher" id="publisher">
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
                                <input type="text" value="genre data stored in the database" className="genre-input" id="genre" placeholder="Genre"/>
                            </label>
                        </div>
                        <br></br>
                        <div>
                            <label htmlFor="pages">Number of Pages: 
                                <input type="text" value="" className="pages-input" id="pages" placeholder="Pages stored in database"/>
                            </label>
                        </div>
                        <br></br>
                        <div>
                            <label htmlFor="rating">Rating: 
                                <input type="text" value="" className="rating-input" id="rating" placeholder="Rating stored in database"/>
                            </label>
                        </div>
                        <br></br>
                        <div>
                            <label htmlFor="synopsis">Synopsis: 
                                <textarea name="synopsis" id="synopsis" placeholder="Synopsis value stored in the database"></textarea>
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