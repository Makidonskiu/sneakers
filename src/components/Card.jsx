import React from 'react';

export const Card = () => {
  return (
    <div className="card">
      <div className="favorite">
        <img src="/img/heart.svg" alt="Heart" />
      </div>

      <img width={133} height={112} src="/img/sneakers/1.jpg" alt="Sneakers" />
      <h5>Мужские кроссовки Nike Blazer Mid Suede</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>10 999 грн.</b>
        </div>
        <button className="button">
          <img width={13} height={13} src="/img/plus.svg" alt="Plus" />
        </button>
      </div>
    </div>
  );
};
