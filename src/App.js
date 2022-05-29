import React from 'react';
import { Header, Card, Drawer, Search } from './components/index';

const card = [1, 2, 3, 4];

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />
      <div className="content p-40">
        <Search />
        <div className="d-flex">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
