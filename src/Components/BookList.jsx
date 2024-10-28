// components/BookList.js
import React from "react";
import Book from './C';
import "./BookList.css";

function BookList({ books }) {
  return (
    <div className="book-list">
      {books.map((book) => (
        <Book key={book.id} title={book.title} author={book.author} imageUrl={book.imageUrl} />
      ))}
    </div>
  );
}

export default BookList;
