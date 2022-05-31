import React from 'react';
import axios from 'axios';

import { Header, Card, Drawer, Search } from './components/index';



function App() {
  const [items, setItems] = React.useState([])
  const [cartItems, setCartItems] = React.useState([])
  const [cartOpened, setCartOpened] = React.useState(false)

  React.useEffect( () => {
    axios.get('https://62964a9d75c34f1f3b2d2299.mockapi.io/items').then( res => setItems(res.data))
  }, [])

  const onAddCart = (obj) => {
    setCartItems(prev =>[...prev,obj])
  }

  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer items={cartItems} onClose={()=> setCartOpened(!cartOpened)}/>}
      <Header cartItems={cartItems} onClickCart={()=> setCartOpened(!cartOpened)}/>
      <div className="content p-40">
        <Search />
        <div className="d-flex flex-wrap justify-content">
          {items.map((objCard, index) => (
            <Card
              key={`${objCard}_${index}`}
              title={objCard.title}
              imageUrl={objCard.url}
              price={objCard.price}
              onAddCart={onAddCart}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
