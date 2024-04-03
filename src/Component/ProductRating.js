import React from 'react';

const ProductRating = ({ rating }) => {
  // Calculate the number of full stars
  const fullStars = Math.floor(rating);

  // Render the star rating
  return (
    <div>
      {/* Render full stars */}
      {[...Array(fullStars)].map((_, index) => (
        <span key={index} className="star">⭐</span>
      ))}
    </div>
  );
};

export default ProductRating;