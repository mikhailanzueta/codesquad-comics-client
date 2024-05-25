import React from "react";

function About() {
    return (
        <main>
            <div className="about-codesquad">
                <h1>ABOUT CODESQUAD COMICS</h1>
                <p className="caption">
                    CodeSquad Comics is a collection of graphic novels read by Mikhail Anzueta. Copyrighted images are used for review purposes only. 
                    Meta information about this collection can be found below. 
                    A detailed list of all the graphic novels in this collection can be found on the homepage. 
                    Additional details about each comic book, including the author, genre, number of pages, 
                    and a brief synopsis, can be found by navigating to the homepage and 
                    clicking the image of the book cover or the Details link for the desired graphic novel."
                </p>
                <div className="Collection-Details">
                    <h2>COLLECTION DETAILS</h2>
                    <div className="collection-container">
                        <ul className="collection-details-list">
                            <li>total comic books: 12</li>
                            <li>latest additions: 12</li>
                            <li>5-star ratings: 5</li>
                            <li>publishers: 9</li>
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default About;