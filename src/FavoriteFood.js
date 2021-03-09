import React, { useState } from 'react';

function FavoriteFood({ onSubmit }) {
  const [favoriteFood, setFavoriteFood] = useState('');
  
  const handleChange = (event) => {
    setFavoriteFood(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(favoriteFood);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="favorite-food">Favorite food</label>
        <input id="favorite-food" type="text" onChange={handleChange} value={favoriteFood}  />
        <button disabled={!favoriteFood}>Add Food</button>
      </form>
    </>
  );
}

export { FavoriteFood };
