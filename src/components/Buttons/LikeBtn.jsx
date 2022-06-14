import React from 'react';
import './LikeBtn.css';

function LikeBtn() {
  return (
    <div className="btn-wrapper">
      <button type="submit">
        <img className="img-btn" src="https://emoji-uc.akamaized.net/orig/09/4d671611fcf5a88f2ac4ee4edf8e95.png" alt="" />
      </button>
    </div>
  );
}

export default LikeBtn;
