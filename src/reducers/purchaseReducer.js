import { PURCHASE } from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case PURCHASE:
      return [...state, action.payload.method, action.payload.formData];
    default:
      return state;
  }
};
