import { ADD_IMG } from '../types/type';

function imgReducerCat(state = {}, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_IMG:
      return payload;
    default:
      return state;
  }
}

export default imgReducerCat;
