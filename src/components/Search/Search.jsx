import React from 'react';

import style from './Search.module.scss'

export const Search = () => {
  return (
    <div className="d-flex align-center mb-40 justify-between">
      <h1>Все кроссовки</h1>
      <div className={style.searchBlock}>
        <img src="/img/search.svg" alt="Search" />
        <input placeholder="Поиск" />
      </div>
    </div>
  );
};
