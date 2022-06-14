import { combineReducers } from 'redux';
import imgReducerCat from './imgReducerCat';
import imgReducerDog from './imgReducerDog';

const rootReducer = combineReducers({
  img: imgReducerCat,
  imgDog: imgReducerDog,
});

export default rootReducer;
