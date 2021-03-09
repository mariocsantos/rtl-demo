import React, { useState } from 'react';

function FavoriteFoodSearch() {
  const [search, setSearch] = useState('');

  const handleChange = (event) => {
    setSearch(event.target.value ?? '');
  }

  return (
    <form>
      <input type="text" onChange={handleChange} placeholder="Search your favorite food"/>
      <button disabled={!search}>Search</button>
    </form>
  );
}

  export { FavoriteFoodSearch };
