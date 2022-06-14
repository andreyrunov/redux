import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DislikeBtn from '../Buttons/DislikeBtn';
import LikeBtn from '../Buttons/LikeBtn';
import NormalBtn from '../Buttons/NormalBtn';
import { setImgDog } from '../Redux/actions/imgActionDog';
import './Picture.css';

function PictureDog() {
  const [imgDogR, setImgDogR] = useState({ imgDog: 'https://c.tenor.com/wpSo-8CrXqUAAAAi/loading-loading-forever.gif' });
  const dispatch = useDispatch();
  const { imgDog } = useSelector((state) => (state));
  useEffect(() => {
    dispatch(setImgDog());
  }, []);
  return (
    <div className="picture-wrapper">
      <div className="likes-wrapper">
        <LikeBtn />
        <NormalBtn />
        <DislikeBtn />
      </div>
      <div className="picture">
        <img className="img" src={imgDog ? imgDog.message : imgDogR.imgDog} alt="" />
      </div>
    </div>
  );
}

export default PictureDog;
