async function getFavoritesFood() {
  return new Promise((resolve) => {
    resolve(['Hamburguer 🍔', 'Pizza 🍕', 'Barbecue 🥩']);
  });
}

export { getFavoritesFood };
