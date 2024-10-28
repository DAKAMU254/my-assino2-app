// App.js
import React from "react";
import BookList from "./components/BookList";

// Import images
import toKillAMockingbird from "./Images/to-kill-a-mockingbird.jpg";
import nineteenEightyFour from "./Images/1984.jpg";
import theGreatGatsby from "./Images/the-great-gatsby.jpg";
import theCatcherInTheRye from "./Images/the-catcher-in-the-rye.jpg";
import prideAndPrejudice from "./Images/pride-and-prejudice.jpg";
import theLordOfTheRings from "./Images/the-lord-of-the-rings.jpg";
import theChroniclesOfNarnia from "./Images/the-chronicles-of-narnia.jpg";
import animalFarm from "./Images/animal-farm.jpg";

function App() {
  const books = [
    { id: 1, title: "To Kill a Mockingbird", author: "Harper Lee", imageUrl: toKillAMockingbird },
    { id: 2, title: "1984", author: "George Orwell", imageUrl: nineteenEightyFour },
    { id: 3, title: "The Great Gatsby", author: "F. Scott Fitzgerald", imageUrl: theGreatGatsby },
    { id: 4, title: "The Catcher in the Rye", author: "J.D. Salinger", imageUrl: theCatcherInTheRye },
    { id: 5, title: "Pride and Prejudice", author: "Jane Austen", imageUrl: prideAndPrejudice },
    { id: 6, title: "The Lord of the Rings", author: "J.R.R. Tolkien", imageUrl: theLordOfTheRings },
    { id: 7, title: "The Chronicles of Narnia", author: "C.S. Lewis", imageUrl: theChroniclesOfNarnia },
    { id: 8, title: "Animal Farm", author: "George Orwell", imageUrl: animalFarm },
  ];

  return (
    <div className="App">
      <h1>Book Collection</h1>
      <BookList books={books} />
    </div>
  );
}

export default App;
