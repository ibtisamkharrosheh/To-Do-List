import React from 'react';
import { useNavigate } from 'react-router-dom';

const BookCard = ({ bookItem, className }) => {
  const navigate = useNavigate();

  return (
    <>
    <div
      key={bookItem.id}
      className="book-card"
      onClick={() => navigate(`/book/${bookItem.id}`)}
    >
      <img src={bookItem.image} alt={bookItem.title} className="book-image" />
      <h3 className={`book-title ${className}`}>{bookItem.title}</h3>
      <p className="book-author text-color-green">
        BY {bookItem.author.toUpperCase()}
      </p>
      <p className="book-reviewer text-color-green">
        REVIEWED BY {bookItem.reviewedBy.toUpperCase()}
      </p>
    </div>
    </>
  );
};

export default BookCard;
