import axios from 'axios';
import { ADD_DOG_PHOTO } from '../types/type';

export const imgActionDog = (value) => ({
  type: ADD_DOG_PHOTO,
  payload: value,
});

export const setImgDog = () => (dispatch) => {
  axios.get('https://dog.ceo/api/breeds/image/random')
    .then((res) => {
      dispatch(imgActionDog(res.data));
    });
};
