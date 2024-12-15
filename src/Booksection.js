import React, { useState } from 'react';
import ArrowButton from './ArrowButton';
import { useNavigate } from 'react-router-dom';

const Booksection = ({ book, sectionTitle, style, className }) => {
  const books = Array.isArray(book) ? [...new Set(book)] : []; // Remove duplicates
  const navigate = useNavigate();

  console.log(books); 

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 6; 

  // Function to (previous)
  const scrollLeft = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - itemsPerPage, 0));
  };

  // Function to scroll right 
  const scrollRight = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + itemsPerPage)
    );
  };

  const visibleBooks = books.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <div className="books-section" style={style}>
      <h2 className={`books-section-title ${className}`}>{sectionTitle}</h2>
      <div className="arrow-buttons">
        <ArrowButton direction="left" onClick={scrollLeft} disabled={currentIndex === 0} />
      </div>
      <div className="books-container">
        {visibleBooks.map((bookItem) => (
          <div key={bookItem.id} className="book-card"  onClick={() => navigate(`/book/${bookItem.id}`)} >
            <img src={bookItem.image} alt={bookItem.title} className="book-image" />
            <h3 className={`book-title ${className}`}>{bookItem.title}</h3>
            <p className="book-author text-color-green">BY {bookItem.author.toUpperCase()}</p>
            <p className="book-reviewer text-color-green">REVIEWED BY {bookItem.reviewedBy.toUpperCase()}</p>
          </div>
        ))}
      </div>
      <div className="arrow-buttons">
        <ArrowButton
          direction="right"
          onClick={scrollRight}
          disabled={currentIndex + itemsPerPage >= books.length}
        />
      </div>
    </div>
  );
};

export default Booksection;
