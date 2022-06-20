import React from 'react';

import style from './Search.module.scss'

export const Search = ({onChange, value, setValue}) => {
  const clearInput = () => setValue('')
  return (
    <div className="d-flex align-center mb-40 justify-between">
      <h1>Все кроссовки </h1>
      <div className={style.searchBlock}>
        <img src="img/search.svg" alt="Search" />
        <input value={value} placeholder="Поиск..." onChange={onChange}/>
        {value && <img width={'20px'} height={'20px'} className="removeBtn cu-p" src="img/btn-remove.svg" alt="Remove"  onClick={clearInput}/>}
      </div>
    </div>
  );
};
