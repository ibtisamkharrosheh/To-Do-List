import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchData } from '../utils/util'; // Import the fetchData function

const BookDetailPage = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const fetchBookDetails = async () => {
    try {
      setLoading(true);
      const response = await fetchData(
        'https://run.mocky.io/v3/26636052-59de-4a73-a268-40c8e25c1060'
      );
      const books = response.books;
      const bookDetail = books.find((b) => b.id === parseInt(id, 10));

      if (bookDetail) {
        setBook(bookDetail);
      } else {
        setError('Book not found.');
      }
    } catch (err) {
      console.error('Error fetching book details:', err);
      setError('Failed to load book details.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookDetails();
  }, []);

  return (
    <div className="book-detail-page">
      {loading ? 
        <p>Loading...</p>
      :
      <div className="book-detail">
        <img className="image" src={book.image ? '../' + book.image : ''} alt={book.title} />
        <h1>{book.title}</h1>
        <p><strong>Author:</strong> {book.author}</p>
        <p><strong>Reviewed By:</strong> {book.reviewedBy}</p>
        <p className="description"><strong>Description:</strong> {book.description || 'No description available.'}</p>
      </div>
      }
    
    </div>
  );
};

export default BookDetailPage;
