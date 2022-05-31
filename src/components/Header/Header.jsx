import React from 'react';

export const Header = ({ onClickCart, cartItems = 0 }) => {
  return (
    <header className="d-flex justify-between align-center p-40">
      <div className="d-flex align-center">
        <img width={40} height={40} src="/img/logo.svg" alt='Logo'/>
        <div>
          <h3 className="text-uppercase">React Sneakers</h3>
          <p className="opacity-5">Магазин лучших кроссовок</p>
        </div>
      </div>
      <ul className="d-flex align-center">
        <li className="mr-30 cu-p" onClick={onClickCart}>
          <img width={30} height={30} src="/img/cart.svg" alt="Cart" />
          <span>{cartItems.reduce((acc,item) => acc + (item.price/1),0)} грн.</span>
        </li>
        <li>
          <img width={30} height={30} src="/img/user.svg" alt="User" />
        </li>
      </ul>
    </header>
  );
};
