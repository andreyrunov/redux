import React from 'react';
import './LikeBtn.css';

function DislikeBtn() {
  return (
    <div className="btn-wrapper">
      <button type="submit">
        <img className="img-btn" src="https://emoji-uc.akamaized.net/orig/39/8bc9c1c1e79fc5155e25fc1b4a5eb1.png" alt="" />
      </button>
    </div>
  );
}

export default DislikeBtn;
