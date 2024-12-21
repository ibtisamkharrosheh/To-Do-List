import React from 'react';
import Slider from 'react-slick';
import BookCard from './Bookcard';
import ArrowButton from '../ArrowButton';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './BookCarousel.css';

const BookCarousel = ({ book, sectionTitle, style, className }) => {
  const books = Array.isArray(book) ? [...new Set(book)] : []; 

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
 // export default class Book car 
 // there some question important to make sure that the carousel doesn not scroll when the user clicks on the carousel item that way 
 // the user can see the details of the book. In this case, you should add a click event listener to the book item and prevent the default behavior of the click event.
 // Also, you should add a transition effect to the book card when it's hovered over. You can use CSS or a library like styled-components to achieve this effect.
 // In addition, you should add a loading state to the carousel while the books data is being fetched. You can use a library like React-Spinners or CSS animations to create a loading spinner.
 // Lastly, you should add a button that allows the user to view all the books in the carousel in a separate page. You can use React Router or a library like Next.js to create a new page for this functionality.
 // Remember to handle any potential errors that may occur during the fetching of the books data and display appropriate error messages to the user.
 // Additionally, you should optimize the performance of the carousel by using lazy loading or virtualization techniques. You can use libraries like react-window or react-virtualized to improve the performance of the carousel.
 // Finally, you should ensure that the carousel is fully responsive and adapts its number of slides based on the screen size. You can use CSS media queries to achieve this.


 