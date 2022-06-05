import React from 'react';
import { myContext } from '../../App';


import style from './Card.module.scss';


export const Card = ({
  id,
  imageUrl,
  title,
  price,
  onAddCart,
  onFavorites,
  isFavorite = false,
}) => {
  const {isAddedItems} = React.useContext(myContext)
  const [favorite, setFaforite] = React.useState(isFavorite);
  const obj = { id, title, price, imageUrl }

  const clickFavorite = () => {
    setFaforite(!favorite);
    onFavorites(obj);
  };

  const onClickPlus = () => onAddCart(obj);
  return (
    <div className={style.card}>
      <div className={style.favorite}>
        <img
          src={favorite ? '/img/unliked.svg' : '/img/liked.svg'}
          alt="Heart"
          onClick={clickFavorite}
        />
      </div>
      <img width="100%" height={135} src={imageUrl} alt="Sneakers" />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{price} грн.</b>
        </div>
        <img
          className={style.button}
          width={30}
          height={30}
          src={isAddedItems(id) ? '/img/btn-checked.svg' : '/img/btn-plus.svg'}
          alt="Plus"
          onClick={onClickPlus}
        />
      </div>
    </div>
  );
};
