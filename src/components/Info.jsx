import React from 'react';
import { Link } from 'react-router-dom';
import { myContext } from '../App';

import style from './Drawer/Drawer.module.scss';

export const Info = ({title, image , decscription}) => {
    const {setCartOpened} = React.useContext(myContext)
    
  return (
    <div className={style.cartEmpty}>
      <img
        className="mb-20"
        width={'120px'}
        src={image}
        alt="Empty-cart"
      />
      <h2>{title}</h2>
      <p className="opacity- 6">{decscription}</p>
      <Link to="/">
        <button onClick={()=> setCartOpened(false)} className={style.greenButton}>
          <img src="img/arrow.svg" alt="Arrow" />
          Вернуться назад
        </button>
      </Link>
    </div>
  );
};
