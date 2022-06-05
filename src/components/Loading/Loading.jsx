import React from 'react';
import ContentLoader from 'react-content-loader';
import style from '../Card/Card.module.scss';

export const Loading = () => {
  return (
    <div className={style.card}>
      <ContentLoader
        speed={2}
        width={150}
        height={247}
        viewBox="0 0 150 193"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb">
        <rect x="0" y="0" rx="10" ry="10" width="150" height="91" />
        <rect x="0" y="100" rx="5" ry="5" width="150" height="15" />
        <rect x="0" y="123" rx="5" ry="5" width="100" height="15" />
        <rect x="0" y="167" rx="5" ry="5" width="80" height="25" />
        <rect x="116" y="159" rx="5" ry="5" width="32" height="32" />
      </ContentLoader>
    </div>
  );
};
