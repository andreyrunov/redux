import { ADD_DOG_PHOTO } from '../types/type';

const imgReducerDog = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_DOG_PHOTO:

      return payload;

    default:
      return state;
  }
};

export default imgReducerDog;
