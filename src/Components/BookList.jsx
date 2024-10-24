import React from 'react';  
import BookItem from './BookItem';  
import './BookList.css'; // Import the CSS file for styling  

const BookList = ({ books }) => {  
  return (  
    <div className="book-list">  
      {books.map((book, index) => (  
        <BookItem key={index} book={book} />  
      
      
      ))}  
    </div>  
  );  
};  

export default BookList;