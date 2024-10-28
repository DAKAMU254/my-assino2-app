// components/Book.js
import React from "react";
import "./Book.css";

function Book({ title, author, imageUrl }) {
  return (
    <div className="book">
      <img
        src={imageUrl}
        alt={title}
        className="book-image"
      />
      <h3 className="book-title">{title}</h3>
      <p className="book-author">by {author}</p>
    </div>
  );
}

export default Book;
