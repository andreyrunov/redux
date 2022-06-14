import React from 'react';
import './LikeBtn.css';

function NormalBtn() {
  return (
    <div className="btn-wrapper">
      <button type="submit">
        <img className="img-btn" src="https://emoji-uc.akamaized.net/orig/a3/00e6617ec150df17efa0114e6f712c.png" alt="" />
      </button>
    </div>
  );
}

export default NormalBtn;
