import React, { useState } from 'react';

import style from './Card.module.scss';

export const Card = ({ imageUrl, title, price, onAddCart }) => {
  const [favorite, setFaforite]=useState(true)
  const [plus, setPlus]=useState(true)

  const clickFavorite = () => {
    setFaforite(!favorite)
  };

  const onClickPlus = () => {
    onAddCart({title, price, imageUrl})
    setPlus(false)
  };



  return (
    <div className={style.card}>
      <div className={style.favorite}>
        <img src={favorite ? "/img/heart.svg" : "/img/liked.svg"} alt="Heart" onClick={clickFavorite} />
      </div>

      <img width={133} height={112} src={imageUrl} alt="Sneakers" />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{price} грн.</b>
        </div>
        
          <img className={style.button} width={30} height={30} src={plus?"/img/btn-plus.svg": "/img/btn-checked.svg"} alt="Plus" onClick={onClickPlus} />
        
      </div>
    </div>
  );
};
