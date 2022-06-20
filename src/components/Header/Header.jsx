import React from 'react';
import { Link } from 'react-router-dom';

export const Header = ({ onClickCart, cartItems = 0 }) => {
  return (
    <header className="d-flex justify-between align-center p-40">
      <Link to="/">
        <div className="d-flex align-center">
          <img width={40} height={40} src="img/logo.svg" alt="Logo" />
          <div>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5">Магазин лучших кроссовок от Сани</p>
          </div>
        </div>
      </Link>
      <ul className="d-flex align-center">
        <li className="mr-30 cu-p" onClick={onClickCart}>
          <img width={30} height={30} src="img/cart.svg" alt="Корзина" />
          <span>{cartItems.reduce((acc, item) => acc + Number(item.price), 0)} грн.</span>
        </li>
        <li>
          <Link to="/favorites">
            <img
              className="cu-p mr-20"
              width={18}
              height={18}
              src="img/heart.svg"
              alt="Закладки"
            />
          </Link>
        </li>
        <li>
          <Link to="/orders">
            <img className="cu-p" width={30} height={30} src="img/user.svg" alt="Пользователь" />
          </Link>
        </li>
      </ul>
    </header>
  );
};
