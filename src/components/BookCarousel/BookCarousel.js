import React from 'react';
import Slider from 'react-slick';
import BookCard from './Bookcard';
import ArrowButton from '../ArrowButton';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './BookCarousel.css';
const BookCarousel = ({ book, sectionTitle, style, className }) => {
  const books = Array.isArray(book) ? [...new Set(book)] : []; // Remove duplicates

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <ArrowButton direction="right" />,
    prevArrow: <ArrowButton direction="left" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="books-section" style={style}>
      <h2 className={`books-section-title ${className}`}>{sectionTitle}</h2>
      <div className="books-slider">
        <Slider {...settings}>
          {books.map((bookItem) => (
            <BookCard key={bookItem.id} bookItem={bookItem} className={className} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default BookCarousel;
