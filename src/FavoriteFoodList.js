import React, { useEffect, useState } from 'react';

import { getFavoritesFood } from './api';

function FavoriteFoodList() {
  const [list, setList] = useState([]);

  const getList = async () => {
    const newList = await getFavoritesFood();
    setList(newList);
  };

  useEffect(() => {
    getList();
  }, []);
  
  return (
    <ul>
      {list.map(item => <li key={item}>{item}</li>)}
    </ul>
  );
}

export { FavoriteFoodList };
