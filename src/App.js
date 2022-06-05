import React, { createContext } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';

import { Header, Drawer } from './components/index';
import { Home, Favorites } from './pages/index';

export const myContext = createContext();

function App() {
  const [items, setItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    (async function fetchData() {
      try {
        const [itemsRes, cartsRes, favoritesRes] = await Promise.all([
          axios.get('https://62964a9d75c34f1f3b2d2299.mockapi.io/items'),
          axios.get('https://62964a9d75c34f1f3b2d2299.mockapi.io/cart'),
          axios.get('https://62964a9d75c34f1f3b2d2299.mockapi.io/favorites'),
        ]);
  
        setIsLoading(false);
  
        setFavorites(favoritesRes.data);
        setCartItems(cartsRes.data);
        setItems(itemsRes.data);
      } catch (error) {
        alert('Ошибка при запросе данных !!!')
        console.log(error)
      }
    })();
  }, []);

  const onAddCart = async (obj) => {
    try {
      const findItem = cartItems.find((favObj) => Number(favObj.id) === Number(obj.id))
      if (findItem) {
        setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)));
        axios.delete(`https://62964a9d75c34f1f3b2d2299.mockapi.io/cart/${findItem.id}`);
      } else {
        setCartItems((prev)=> [...prev, obj])
        const { data } = await axios.post('https://62964a9d75c34f1f3b2d2299.mockapi.io/cart', obj);
        setCartItems((prev) => prev.map(item=>{
          if(item.id === data.id){
            return {
              ...item,
              id: data.id
            };
          }
          return item
        }));
      }
    } catch (error) {
      alert(`Не удалось добавить в корзину, ошибка: ${error.name}`);
      console.log(error)
    }
  };

  const onDeleteItem = (id) => {
    axios.delete(`https://62964a9d75c34f1f3b2d2299.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const saveFavorites = async (obj) => {
    try {
      const findFavorite = favorites.find((favObj) => Number(favObj.id) === Number(obj.id))
      if (findFavorite) {
        axios.delete(`https://62964a9d75c34f1f3b2d2299.mockapi.io/favorites/${obj.id}`);
        setFavorites((prev) => prev.filter((item) => Number(item.id) !== Number(findFavorite.id)));
      } else {
        const { data } = await axios.post(
          'https://62964a9d75c34f1f3b2d2299.mockapi.io/favorites',
          obj,
        );
        setFavorites((prev) => [...prev, data]);
      }
    } catch (error) {
      alert('Неудалось добавить в избранное');
      console.log(error)
    }
  };

  const isAddedItems = (id) => cartItems.some((obj) => Number(obj.id) === Number(id));

  const onChangeInput = (e) => setSearchValue(e.target.value);

  return (
    <myContext.Provider
      value={{
        items,
        favorites,
        cartItems,
        searchValue,
        onAddCart,
        onChangeInput,
        saveFavorites,
        setSearchValue,
        isLoading,
        isAddedItems,
        setCartOpened,
        onDeleteItem,
        setCartItems,
      }}>
      <div className="wrapper clear">
        {cartOpened && (
          <Drawer
            items={cartItems}
            onClose={() => setCartOpened(!cartOpened)}
            onRemove={onDeleteItem}
          />
        )}
        <Header cartItems={cartItems} onClickCart={() => setCartOpened(!cartOpened)} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </div>
    </myContext.Provider>
  );
}

export default App;
