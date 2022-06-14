import axios from 'axios';
import { ADD_IMG } from '../types/type';

export const imgAction = (value) => ({
  type: ADD_IMG,
  payload: value,
});

export const setImg = () => (dispatch) => {
  axios.get('https://api.thecatapi.com/v1/images/search?size=full')
    .then((res) => {
      dispatch(imgAction(res.data));
    });
};
