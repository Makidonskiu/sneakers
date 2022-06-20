import React from 'react';
import { myContext } from '../../App';
import { Info } from '../Info';
import axios from 'axios';

import style from './Drawer.module.scss';

const delay = () => new Promise(resolve => setTimeout(resolve, 500))

export const Drawer = ({ items, onClose, onRemove }) => {
  const {cartItems, setCartItems } = React.useContext(myContext);
  const [OrderId, setOrderId] = React.useState();
  const [isOrderComplite, setIsOrderComplite] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const onClickOrder = async () => {
    try {
      setIsLoading(true)
      const {data} = await axios.post('https://62964a9d75c34f1f3b2d2299.mockapi.io/order', {
        items: cartItems
      });
      
      setOrderId(data.parentId)
      setIsOrderComplite(true);
      setCartItems([]);

      for(let i = 0; i < cartItems.length; i++){
        const item = cartItems[i];
        await axios.delete('https://62964a9d75c34f1f3b2d2299.mockapi.io/cart/' + item.id)
        await delay()
      }
    } catch (error) {
      alert("Не удалось создать заказ")
    }
    setIsLoading(false)
  };
  return (
    <div className={style.overlay}>
      <div className={style.drawer}>
        <h2 className="mb-30 d-flex justify-between">
          Корзина{' '}
          <img className="removeBtn" src="img/btn-remove.svg" alt="Remove" onClick={onClose} />
        </h2>

        {items.length > 0 ? (
          <>
            <div className={style.items}>
              {items.map((item, index) => (
                <div
                  key={`${item}_${index}`}
                  className="cartItem d-flex align-center mb-20  justify-between">
                  <div className="d-flex align-center">
                    <div
                      className="cartItemImg"
                      style={{ backgroundImage: `url(${item.imageUrl})` }}></div>
                    <div className="mr-20">
                      <p className="mb-5">{item.title}</p>
                      <b>{item.price}</b>
                    </div>
                  </div>

                  <img
                    className="removeBtn"
                    src="img/btn-remove.svg"
                    alt="Remove"
                    onClick={() => onRemove(item.id)}
                  />
                </div>
              ))}
            </div>
            <div className={style.cartTotalBlock}>
              <ul>
                <li className="d-flex">
                  <span>Итого:</span>
                  <div></div>
                  <b>{items.reduce((acc, item) => acc + Number(item.price), 0)} грн.</b>
                </li>
              </ul>
              <button disabled={isLoading} onClick={onClickOrder} className={style.greenButton}>
                Оформить <img src="img/arrow.svg" alt="Arrow" />
              </button>
            </div>
          </>
        ) : (
          <Info
            title={isOrderComplite ? 'Заказ оформлен!' : 'Корзина пустая'}
            decscription={
              isOrderComplite
                ? `Ваш заказ №${OrderId} скоро будет передан курьерской доставке`
                : 'Добавьте хотябы одну пару кроссовокб чтобы сделать заказ.'
            }
            image={isOrderComplite ? 'img/complete-order.jpg' : 'img/empty-cart.jpg'}
          />
        )}
      </div>
    </div>
  );
};
