import './Categories.css';

export const CategoryItem =({ category}) => {
    return (
        <div className="category-item" key={category.id}>
        <img
          src={category.image}
          alt={category.title}
          className="category-image"
        />
        <div className="text-content">
          <p className="tittle-name">{category.title}</p>
          <p>{category.description}</p>
        </div>
      </div>
    );
};