import React from 'react';

import style from './Drawer.module.scss';

export const Drawer = ({ items, onClose }) => {
  return (
    <div className={style.overlay}>
      <div className={style.drawer}>
        <h2 className="mb-30 d-flex justify-between">
          Корзина{' '}
          <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" onClick={onClose} />
        </h2>

        <div className={style.items}>
          {items.map((item, index) => (
            <div key={`${item}_${index}`} className="cartItem d-flex align-center mb-20">
              <div
                className="cartItemImg"
                style={{ backgroundImage: `url(${item.imageUrl})` }}></div>
              <div className="mr-20">
                <p className="mb-5">{item.title}</p>
                <b>{item.price}</b>
              </div>
              <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
            </div>
          ))}
        </div>

        <div className={style.cartTotalBlock}>
          <ul>
            <li className="d-flex">
              <span>Итого:</span>
              <div></div>
              <b>{items.reduce((acc, item)=> acc + +(item.price),0)} грн.</b>
            </li>
          </ul>
          <button className={style.greenButton}>
            Оформить <img src="/img/arrow.svg" alt="Arrow" />
          </button>
        </div>
      </div>
    </div>
  );
};
