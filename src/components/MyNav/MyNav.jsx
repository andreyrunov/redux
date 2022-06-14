import React from 'react';
import './MyNav.css';

function MyNav() {
  return (
    <div className="menu-wrapper">
      <div className="menu-btn">

        <a className="a-btn" href="/cats">Кошки</a>

      </div>
      <div className="menu-btn">

        <a className="a-btn" href="/dogs">Собаки</a>

      </div>
    </div>
  );
}

export default MyNav;
