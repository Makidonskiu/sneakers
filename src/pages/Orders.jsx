import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import { myContext } from '../App';
import { Card } from '../components';

export const Orders = () => {
  const { onAddCart, saveFavorites } = React.useContext(myContext);
  const [orders, setOrders] = React.useState([]);
  React.useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get('https://62964a9d75c34f1f3b2d2299.mockapi.io/orders');
        setOrders(data.map((obj) => obj.items).flat());
      } catch (error) {
        alert('Не удалось отобразить заказы')
        console.log(error)
      }
    })();
  }, []);
  return (
    <Link to="/orders">
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Мои заказы</h1>
        </div>
        <div className="d-flex flex-wrap justify-content">
          {orders &&
            orders.map((objCard, index) => (
              <Card
                key={`${objCard.id}_${index}`}
                id={objCard.id}
                title={objCard.title}
                imageUrl={objCard.imageUrl}
                onAddCart={(obj) => onAddCart(obj)}
                onFavorites={(obj) => saveFavorites(obj)}
              />
            ))}
        </div>
      </div>
    </Link>
  );
};
