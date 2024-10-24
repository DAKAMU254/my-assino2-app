import React from 'react';  
import BookList from './Components/BookList';  
const App = () => {  
  const books = [  
    { title: 'World War2', author: 'George Orwell' },  
    { title: 'To Kill a Mockingbird', author: 'Harper Lee' },  
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },  
    { title: 'Pride and Prejudice', author: 'Jane Austen' },  
    { title: 'The Catcher in the Rye', author: 'J.D. Salinger' },  
    { title: 'Brave New World', author: 'Aldous Huxley' },  
    { title: 'Moby Dick', author: 'Herman Melville' },  
    { title: 'War and Peace', author: 'Leo Tolstoy' },  
  ];  

  return (  
    <div>  
      <h1>Book List</h1>  
      <BookList books={books} />  
    </div>  
  );  
};  

export default App;