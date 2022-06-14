import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DislikeBtn from '../Buttons/DislikeBtn';
import LikeBtn from '../Buttons/LikeBtn';
import NormalBtn from '../Buttons/NormalBtn';
import { setImg } from '../Redux/actions/imgAction';
import './Picture.css';

function PictureCat() {
  const [imgR, setImgR] = useState({ img: 'https://c.tenor.com/wpSo-8CrXqUAAAAi/loading-loading-forever.gif' });
  const dispatch = useDispatch();
  const { img } = useSelector((state) => (state));
  useEffect(() => {
    dispatch(setImg());
    // setImgR(img);
  }, []);
  return (
    <div className="picture-wrapper">
      <div className="likes-wrapper">
        <LikeBtn />
        <NormalBtn />
        <DislikeBtn />
      </div>
      <div className="picture">
        <img className="img" src={img[0] ? img[0].url : imgR.img} alt="" />
      </div>
    </div>
  );
}

export default PictureCat;
