import React from 'react';

export const Header = () => {
  return (
    <header className="d-flex justify-between align-center p-40">
      <div className="d-flex align-center">
        <img width={40} height={40} src="/img/logo.svg" />
        <div>
          <h3 className="text-uppercase">React Sneakers</h3>
          <p className="opacity-5">Магазин лучших кроссовок</p>
        </div>
      </div>
      <ul className="d-flex align-center">
        <li className="mr-30">
          <img width={30} height={30} src="/img/cart.svg" alt="Cart" />
          <span>1205 грн.</span>
        </li>
        <li>
          <img width={30} height={30} src="/img/user.svg" alt="User" />
        </li>
      </ul>
    </header>
  );
};
