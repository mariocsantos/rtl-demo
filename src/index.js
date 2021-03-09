import React from 'react';
import ReactDOM from 'react-dom';

import { FavoriteFood } from './FavoriteFood';
import { FavoriteFoodList } from './FavoriteFoodList';
import { FavoriteFoodSearch } from './FavoriteFoodSearch';

ReactDOM.render(
  <React.StrictMode>
    <FavoriteFoodSearch />
    <FavoriteFoodList />
    <FavoriteFood />
  </React.StrictMode>,
  document.getElementById('root')
);
