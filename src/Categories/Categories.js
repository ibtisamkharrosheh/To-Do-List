import React, { useEffect, useState } from 'react';
import './Categories.css';
import {CategoryItem} from "./CategoryItem";
import { fetchData } from '../util';

const Categories = ( ) => {
  const [categories, setCategory] = useState(null);

    useEffect(() => {
     const data= fetchData("https://run.mocky.io/v3/002f7ab9-dd35-4fd2-b2a7-2926267ab33f" ).then((data) => {
      setCategory(data.categories)
      // handle the data here
    }).catch((error) => {
      console.error("Error:", error);
    });
   
        console.log({data});
        
    }, []);

  if (!categories || categories.length === 0) {
    return <p>Loading categories...</p>; // Display a loading message or a placeholder
  }

  return (
    <div className="categories-section">
      <p className="tittle">
        <span className="highlight">Browse</span> Our Most Popular Categories
      </p>
      <div className="categories-grid">
        {categories.map((category) => (
          <CategoryItem category={category} />
        ))}
      </div>
    </div>
  );
};

export default Categories;


