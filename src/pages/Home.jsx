import React from 'react';
import { Card, Search, Loading } from '../components';
import { myContext } from '../App';

export const Home = () => {
  const {
    items,
    searchValue,
    onAddCart,
    onChangeInput,
    saveFavorites,
    setSearchValue,
    isLoading
  } = React.useContext(myContext);

  const skeleton = [...new Array(8)].map((_, i) => <Loading key={i} />);
  return (
    <div className="content p-40">
      <Search onChange={onChangeInput} value={searchValue} setValue={setSearchValue} />
      <div className="d-flex flex-wrap justify-content">
        {isLoading
          ? skeleton
          : items
              .filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
              .map((objCard) => (
                <Card
                  key={objCard.id}
                  id={objCard.id}
                  title={objCard.title}
                  imageUrl={objCard.url}
                  price={objCard.price}
                  onAddCart={(obj) => onAddCart(obj)}
                  onFavorites={(obj) => saveFavorites(obj)}
                  isFavorite={true}
                  loading={isLoading}
                  parentId={objCard.parentId}
                />
              ))}
      </div>
    </div>
  );
};
