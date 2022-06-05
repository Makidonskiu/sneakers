import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../components';
import { myContext } from '../App';

export const Favorites = () => {
  const { favorites, saveFavorites } = React.useContext(myContext);
  return (
    <Link to="/favorites">
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Мои закладки</h1>
        </div>
        <div className="d-flex flex-wrap justify-content">
          {favorites.map((objCard, index) => (
            <Card
              key={`${objCard.id}_${index}`}
              id={objCard.id}
              title={objCard.title}
              imageUrl={objCard.imageUrl}
              price={objCard.price}
              onFavorites={saveFavorites}
            />
          ))}
        </div>
      </div>
    </Link>
  );
};
